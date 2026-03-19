import { useState, useCallback } from 'react';
import LandingScreen from '@/components/quiz/LandingScreen';
import RegistrationForm, { type RegistrationData } from '@/components/quiz/RegistrationForm';
import AgePeriodSelector from '@/components/quiz/AgePeriodSelector';
import QuizStep from '@/components/quiz/QuizStep';
import ResultScreen from '@/components/quiz/ResultScreen';
import { agePeriods, getAgePeriodFromBirthDate, type Question } from '@/data/quizQuestions';

type Phase = 'landing' | 'registration' | 'agePeriod' | 'quiz' | 'result';

interface AlertItem {
  question: Question;
  answer: 'SIM' | 'NÃO';
}

export default function Index() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [registration, setRegistration] = useState<RegistrationData | null>(null);
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [preSelectedPeriodId, setPreSelectedPeriodId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<('SIM' | 'NÃO')[]>([]);
  const [direction, setDirection] = useState(1);

  const selectedPeriod = agePeriods.find(p => p.id === selectedPeriodId);

  const handleRegistration = useCallback((data: RegistrationData) => {
    setRegistration(data);
    let preId: string | null = null;
    if (data.birthDate) {
      preId = getAgePeriodFromBirthDate(new Date(data.birthDate));
    }
    setPreSelectedPeriodId(preId);
    setSelectedPeriodId(preId);
    setPhase('agePeriod');
  }, []);

  const handlePeriodSelect = useCallback((periodId: string) => {
    if (selectedPeriodId === periodId && phase === 'agePeriod') {
      // Confirm selection
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setDirection(1);
      setPhase('quiz');
    } else {
      setSelectedPeriodId(periodId);
    }
  }, [selectedPeriodId, phase]);

  const handleAnswer = useCallback((answer: 'SIM' | 'NÃO') => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setDirection(1);

    if (selectedPeriod && currentQuestionIndex + 1 >= selectedPeriod.questions.length) {
      setPhase('result');
    } else {
      setCurrentQuestionIndex(i => i + 1);
    }
  }, [answers, currentQuestionIndex, selectedPeriod]);

  const handleRestart = useCallback(() => {
    setPhase('landing');
    setRegistration(null);
    setSelectedPeriodId(null);
    setPreSelectedPeriodId(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, []);

  // Calculate alerts for result
  const getAlerts = (): AlertItem[] => {
    if (!selectedPeriod) return [];
    return selectedPeriod.questions
      .map((q, i) => ({ question: q, answer: answers[i] }))
      .filter(({ question, answer }) => answer === question.alertAnswer);
  };

  if (phase === 'landing') {
    return <LandingScreen onStart={() => setPhase('registration')} />;
  }

  if (phase === 'registration') {
    return <RegistrationForm onSubmit={handleRegistration} />;
  }

  if (phase === 'agePeriod') {
    return (
      <AgePeriodSelector
        preSelectedId={preSelectedPeriodId}
        onSelect={handlePeriodSelect}
      />
    );
  }

  if (phase === 'quiz' && selectedPeriod) {
    const question = selectedPeriod.questions[currentQuestionIndex];
    return (
      <QuizStep
        question={question}
        currentStep={currentQuestionIndex + 1}
        totalSteps={selectedPeriod.questions.length}
        childName={registration?.childName || 'Criança'}
        onAnswer={handleAnswer}
        direction={direction}
      />
    );
  }

  if (phase === 'result' && selectedPeriod) {
    return (
      <ResultScreen
        childName={registration?.childName || 'Criança'}
        periodLabel={selectedPeriod.label}
        alerts={getAlerts()}
        totalQuestions={selectedPeriod.questions.length}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}
