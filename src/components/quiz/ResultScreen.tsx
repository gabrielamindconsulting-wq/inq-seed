import { ExternalLink, PlayCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-bubble-pattern p-4 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          {/* Left column - result content */}
          <div className="md:w-[55%] flex flex-col items-center">
            {/* Logo */}
            <img src={logo} alt="Instituto Nadja Quadros" className="h-16 object-contain mb-8" />

            {/* Card */}
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-10 w-full">
              <div className="text-center mb-8">
                {result === 'A' && (
                  <p className="text-xl md:text-[22px] leading-relaxed text-primary font-bold tracking-tight">
                    Parabéns! O seu filho atingiu todos os marcos esperados para a idade.
                    <span className="block mt-3 font-semibold text-lg text-muted-foreground">
                      Continue acompanhando o seu desenvolvimento e conte sempre com o Instituto Nadja Quadros.
                    </span>
                  </p>
                )}
                {result === 'B' && (
                  <p className="text-xl md:text-[22px] leading-relaxed text-foreground font-bold tracking-tight">
                    O seu filho não atingiu todos os marcos esperados para a idade.
                    <span className="block mt-3 font-semibold text-lg text-muted-foreground">
                      Tenha atenção — o Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem, para melhor acompanhamento.
                    </span>
                  </p>
                )}
                {result === 'C' && (
                  <p className="text-xl md:text-[22px] leading-relaxed text-foreground font-bold tracking-tight">
                    O seu filho não atingiu todos os marcos esperados para a idade.
                    <span className="block mt-3 font-semibold text-lg text-muted-foreground">
                      O Instituto Nadja Quadros irá entrar em contato com você para o agendamento de uma triagem, para melhor acompanhamento.
                    </span>
                  </p>
                )}
              </div>

              {/* CTA */}
              {result === 'A' ? (
                <a href="https://inqsaude.com.br" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-bold flex items-center justify-center gap-2">
                    Conhecer o Instituto <ExternalLink size={16} />
                  </Button>
                </a>
              ) : (
                <div className="flex flex-col items-center">
                  <a href="https://wa.me/5561998022108" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-bold flex items-center justify-center gap-2">
                      Falar no WhatsApp <ExternalLink size={16} />
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Ou entre em contato por e-mail: contato@inqsaude.com.br
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onRestart}
              className="mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold"
            >
              Fazer novo rastreio
            </button>
          </div>

          {/* Right column - video placeholder */}
          <div className="md:w-[45%] mt-10 md:mt-0 flex items-center justify-center">
            <div
              id="video-resultado"
              className="w-full aspect-video rounded-xl bg-[hsl(0,0%,10%)] flex flex-col items-center justify-center gap-3 shadow-lg"
            >
              <PlayCircle size={56} className="text-white/80" />
              <span className="text-sm text-white/60 text-center px-4">
                Dra. Nadja Quadros — Próximos passos
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-muted-foreground text-center">
          Este rastreio não constitui diagnóstico. É uma ferramenta de triagem preventiva.
        </p>
      </div>
    </div>
  );
}
