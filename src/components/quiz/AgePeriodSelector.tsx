import { Baby, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { agePeriods } from '@/data/quizQuestions';
import logo from '@/assets/logo-inq.png';

interface Props {
  preSelectedId: string | null;
  onSelect: (periodId: string) => void;
}

export default function AgePeriodSelector({ preSelectedId, onSelect }: Props) {
  const selected = preSelectedId;

  return (
    <div className="min-h-screen bg-bubble-pattern p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6 pt-4">
          <img src={logo} alt="Instituto Nadja Quadros" className="h-14 object-contain" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-2">
          Selecione o período de idade
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          {preSelectedId
            ? 'Com base na data de nascimento, sugerimos o período abaixo. Você pode confirmar ou ajustar.'
            : 'Escolha o período que corresponde à idade da criança.'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {agePeriods.map((p) => {
            const isSelected = selected === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200
                  ${isSelected
                    ? 'border-primary bg-accent shadow-md'
                    : 'border-border bg-card hover:border-secondary hover:shadow-sm'
                  }
                `}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isSelected ? 'bg-primary' : 'bg-muted'}`}>
                  {parseInt(p.id.slice(1)) <= 7
                    ? <Baby size={20} className={isSelected ? 'text-primary-foreground' : 'text-primary'} />
                    : <Clock size={20} className={isSelected ? 'text-primary-foreground' : 'text-primary'} />
                  }
                </div>
                <span className={`text-sm font-semibold text-center ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="flex justify-center">
            <Button
              onClick={() => onSelect(selected)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-8 text-base font-bold"
            >
              Iniciar Rastreio para este Período
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
