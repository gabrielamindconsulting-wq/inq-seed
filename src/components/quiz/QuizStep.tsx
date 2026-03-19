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
  'baby smile': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'newborn eyes': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  'baby mobile': 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=400&fit=crop',
  'newborn sound': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'baby hands': 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&h=400&fit=crop',
  'baby head': 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=400&fit=crop',
  'baby holding': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'baby rigid': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'baby sound': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'baby laugh': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'baby grab toy': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'baby rolling': 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
  'baby standing': 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=400&fit=crop',
  'baby hands transfer': 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&h=400&fit=crop',
  'baby babbling': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'baby peekaboo': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'baby sitting': 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=400&fit=crop',
  'baby smile social': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'baby crawling': 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=600&h=400&fit=crop',
  'baby standing support': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'baby waving': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop',
  'baby pointing': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'baby mood': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'toddler walking': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler objects': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler words': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'toddler mother separation': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'toddler pointing': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler pretend play': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler regression': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'toddler vocabulary': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'toddler learning': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler hug parent': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'toddler pointing share': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler walking independent': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler running': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler two words': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'toddler social play': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'toddler imitation': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'toddler eye contact': 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop',
  'child stairs': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child following instruction': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child speaking': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'child pretend play': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child blocks stacking': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child curious': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child jumping': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'child drawing': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child speaking comprehensible': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'child concepts learning': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child playing peers': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'child imaginative play': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child jumping leap': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'child drawing figure': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child name identity': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'child real fantasy': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child emotions expressing': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'child comprehension language': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'child regression skills': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'child speech clear': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
  'child learning school': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child emotions control': 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=400&fit=crop',
  'child independence routine': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
  'child communication initiate': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=600&h=400&fit=crop',
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

            {/* Support text */}
            <div className="bg-accent/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.supportText}
              </p>
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
