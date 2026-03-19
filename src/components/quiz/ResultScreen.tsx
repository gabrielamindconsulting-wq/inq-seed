import { ExternalLink } from 'lucide-react';
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

export default function ResultScreen({ alerts, onRestart }: Props) {
  const alertCount = alerts.length;

  const getResult = () => {
    if (alertCount === 0) return 'A';
    if (alertCount <= 2) return 'B';
    return 'C';
  };

  const result = getResult();

  return (
    <div className="min-h-screen bg-bubble-pattern p-4">
      <div className="max-w-lg mx-auto pt-6 pb-8 flex flex-col items-center">
        {/* Logo */}
        <img src={logo} alt="Instituto Nadja Quadros" className="h-16 object-contain mb-10" />

        {/* Result text */}
        <div className="text-center mb-10 max-w-md">
          {result === 'A' && (
            <p className="text-xl leading-relaxed text-primary font-normal">
              Parabéns! O seu filho atingiu todos os marcos esperados para a idade. Continue acompanhando o seu desenvolvimento e conte sempre com o Instituto Nadja Quadros.
            </p>
          )}
          {result === 'B' && (
            <p className="text-xl leading-relaxed text-foreground font-normal">
              O seu filho não atingiu todos os marcos esperados para a idade. Tenha atenção — o Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem gratuita, para melhor acompanhamento.
            </p>
          )}
          {result === 'C' && (
            <p className="text-xl leading-relaxed text-foreground font-normal">
              O seu filho não atingiu todos os marcos esperados para a idade. O Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem gratuita, para melhor acompanhamento.
            </p>
          )}
        </div>

        {/* CTA */}
        {result === 'A' ? (
          <a
            href="https://inqsaude.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs"
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-bold flex items-center gap-2">
              Conhecer o Instituto <ExternalLink size={16} />
            </Button>
          </a>
        ) : (
          <div className="flex flex-col items-center w-full max-w-xs">
            <a
              href="https://wa.me/5561998022108"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-bold flex items-center gap-2">
                Falar no WhatsApp <ExternalLink size={16} />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Ou entre em contato por e-mail: contato@inqsaude.com.br
            </p>
          </div>
        )}

        <button
          onClick={onRestart}
          className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold"
        >
          Fazer novo rastreio
        </button>

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground text-center">
          Este rastreio não constitui diagnóstico. É uma ferramenta de triagem preventiva.
        </p>
      </div>
    </div>
  );
}
