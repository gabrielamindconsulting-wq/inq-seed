import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, Hand, Brain, MessageCircle } from 'lucide-react';
import type { Question } from '@/data/quizQuestions';
import logo from '@/assets/logo-inq.png';

interface Props {
  question: Question;
  currentStep: number;
  totalSteps: number;
  childName: string;
  onAnswer: (answer: 'SIM' | 'NÃO') => void;
  direction: number;
}

const areaConfig: Record<string, { icon: typeof Heart; colorClass: string; bgClass: string }> = {
  'Socioemocional': { icon: Heart, colorClass: 'text-area-socioemocional', bgClass: 'bg-area-socioemocional/15' },
  'Sensório-motor': { icon: Eye, colorClass: 'text-area-sensoriomotor', bgClass: 'bg-area-sensoriomotor/15' },
  'Função Manual': { icon: Hand, colorClass: 'text-area-funcao-manual', bgClass: 'bg-area-funcao-manual/15' },
  'Cognitivo': { icon: Brain, colorClass: 'text-area-cognitivo', bgClass: 'bg-area-cognitivo/15' },
  'Comunicação': { icon: MessageCircle, colorClass: 'text-area-comunicacao', bgClass: 'bg-area-comunicacao/15' },
};

const UNSPLASH_IMAGES: Record<string, string> = {
  // P1 — Newborn (0-3 months)
  'newborn smile': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'newborn eyes': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  'infant mobile': 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=400&fit=crop',
  'newborn sleeping': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'newborn hands': 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&h=400&fit=crop',
  'newborn feet': 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=400&fit=crop',
  'infant feeding': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'infant hand mouth': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'newborn sound': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'infant head control': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  // P2 — Baby 4-6 months
  'baby 4 months': 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=400&fit=crop',
  'baby 5 months': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'infant smiling': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  // P3 — Baby 7-9 months
  'baby sitting': 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=400&fit=crop',
  'baby 8 months': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'infant sitting': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  // P4 — Baby 10-12 months
  'baby crawling': 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=400&fit=crop',
  'baby standing': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  '10 months baby': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  // P5 — Toddler 13-15 months
  'toddler walking': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  '1 year old': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler first steps': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  // P6 — Toddler 16-18 months
  'toddler 18 months': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'young toddler': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler playing': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  // P7 — 2 years
  '2 year old child': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler 2 years': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler running': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  // P8 — 3 years
  '3 year old child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'preschool child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child playing': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  // P9 — 4 years
  '4 year old child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'preschool drawing': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child jumping': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  // P10 — 5 years
  '5 year old child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child school age': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'kindergarten child': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  // P11 — 6 years
  '6 year old child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'school child': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child learning': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
};

export default function QuizStep({ question, currentStep, totalSteps, childName, onAnswer, direction }: Props) {
  const area = areaConfig[question.area] || areaConfig['Cognitivo'];
  const AreaIcon = area.icon;
  const progress = ((currentStep) / totalSteps) * 100;
  const imgUrl = UNSPLASH_IMAGES[question.imageKeyword] || 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop';

  return (
    <div className="min-h-screen bg-bubble-pattern">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="INQ" className="h-8" />
          <span className="text-sm font-semibold text-muted-foreground">Rastreio de {childName}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-2xl mx-auto px-4 pt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Pergunta {currentStep} de {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-5 aspect-video bg-muted">
              <img
                src={imgUrl}
                alt="Contexto da pergunta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Area badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${area.bgClass} ${area.colorClass}`}>
                <AreaIcon size={14} />
                {question.area}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
              {question.question}
            </h2>

            {/* Support text with examples */}
            <div className="bg-accent/50 border border-border rounded-lg p-4 mb-6 space-y-2">
              {question.supportText && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {question.supportText}
                </p>
              )}
              {question.examples && question.examples.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">Exemplos:</p>
                  <ul className="space-y-1">
                    {question.examples.map((ex, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onAnswer('SIM')}
                className="h-14 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                SIM
              </button>
              <button
                onClick={() => onAnswer('NÃO')}
                className="h-14 rounded-xl font-bold text-base bg-card text-foreground border-2 border-border hover:border-secondary transition-colors"
              >
                NÃO
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
