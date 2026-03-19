import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Question } from '@/data/quizQuestions';
import logo from '@/assets/logo-inq.png';

interface AlertItem {
  question: Question;
  answer: 'SIM' | 'NÃO';
}

interface Props {
  childName: string;
  periodLabel: string;
  alerts: AlertItem[];
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultScreen({ childName, periodLabel, alerts, onRestart }: Props) {
  const alertCount = alerts.length;

  const getResult = () => {
    if (alertCount === 0) return 'A';
    if (alertCount <= 2) return 'B';
    return 'C';
  };

  const result = getResult();

  return (
    <div className="min-h-screen bg-bubble-pattern p-4">
      <div className="max-w-lg mx-auto pt-6">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Instituto Nadja Quadros" className="h-16 object-contain" />
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
          {/* Result header */}
          <div className="flex flex-col items-center mb-6">
            {result === 'A' ? (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle size={36} className="text-primary" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
                <AlertCircle size={36} className="text-destructive" />
              </div>
            )}

            <h2 className="text-xl font-bold text-foreground text-center">
              {result === 'A' && 'Parabéns!'}
              {result === 'B' && 'Atenção'}
              {result === 'C' && 'Sinal de Atenção'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Resultado para {childName} — {periodLabel}
            </p>
          </div>

          {/* Result text */}
          <div className="bg-accent/50 rounded-lg p-4 mb-6">
            {result === 'A' && (
              <p className="text-sm text-foreground leading-relaxed">
                O seu filho atingiu todos os marcos esperados para a idade. Continue acompanhando o seu desenvolvimento e conte sempre com o Instituto Nadja Quadros.
              </p>
            )}
            {result === 'B' && (
              <p className="text-sm text-foreground leading-relaxed">
                O seu filho não atingiu todos os marcos esperados para a idade. Tenha atenção — o Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem, para melhor acompanhamento.
              </p>
            )}
            {result === 'C' && (
              <p className="text-sm text-foreground leading-relaxed">
                O seu filho não atingiu todos os marcos esperados para a idade. Isso pode ser um sinal de alerta. O Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem, para melhor acompanhamento.
              </p>
            )}
          </div>

          {/* Alert questions */}
          {alertCount > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-foreground mb-3">
                Áreas que merecem atenção ({alertCount}):
              </h3>
              <ul className="space-y-2">
                {alerts.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <AlertCircle size={16} className="text-destructive shrink-0 mt-0.5" />
                    <span><strong>{a.question.area}:</strong> {a.question.question}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          {result === 'A' ? (
            <a
              href="https://inqsaude.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-bold flex items-center gap-2">
                Conhecer o Instituto <ExternalLink size={16} />
              </Button>
            </a>
          ) : (
            <a
              href="https://wa.me/5561998022108"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-bold flex items-center gap-2">
                Falar no WhatsApp <ExternalLink size={16} />
              </Button>
            </a>
          )}

          <button
            onClick={onRestart}
            className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold"
          >
            Fazer novo rastreio
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center space-y-1 pb-8">
          <p className="text-xs text-muted-foreground">
            Este rastreio não constitui diagnóstico. É uma ferramenta de triagem preventiva.
          </p>
          <p className="text-xs text-muted-foreground">
            Contato: (61) 99802-2108 | inqsaude.com.br
          </p>
        </div>
      </div>
    </div>
  );
}
