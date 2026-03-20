import { ShieldCheck, Users, GraduationCap, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-inq.png';

interface Props {
  onStart: () => void;
}

const agePills = [
  '0–3 meses',
  '4–6 meses',
  '7–12 meses',
  '13–18 meses',
  '2–3 anos',
  '4–6 anos',
];

const seals = [
  { icon: ShieldCheck, text: 'Baseado em marcos clínicos do desenvolvimento' },
  { icon: GraduationCap, text: 'Desenvolvido por especialistas' },
  { icon: Users, text: '+500 famílias atendidas em Brasília-DF' },
];

export default function LandingScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-bubble-pattern p-4">
      <div className="max-w-5xl mx-auto pt-6 pb-8">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex justify-center md:justify-start mb-8">
          <img src={logo} alt="Instituto Nadja Quadros" className="h-16 object-contain" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          {/* Left column - content */}
          <div className="flex flex-col items-center md:items-start md:w-[55%]">
            {/* Specialty tags */}
            <p className="text-sm text-muted-foreground font-semibold mb-5 text-center md:text-left">
              TEA &middot; TDAH &middot; Neurodesenvolvimento &middot; Atrasos
            </p>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground text-center md:text-left leading-tight mb-4">
              Faça o acompanhamento dos marcos de desenvolvimento do seu filho
            </h1>

            {/* Social action subtitle */}
            <p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed mb-6 max-w-md">
              O Instituto Nadja Quadros disponibiliza o teste de rastreio como uma ação social, não tendo cobrança para realizá-lo.
            </p>

            {/* Age pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {agePills.map((label) => (
                <span
                  key={label}
                  className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-border"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={onStart}
              className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-bold shadow-lg"
            >
              Iniciar rastreio
            </Button>

            {/* Credibility seals */}
            <div className="mt-8 grid gap-4 w-full max-w-sm">
              {seals.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - video placeholder */}
          <div className="md:w-[45%] mt-10 md:mt-0 flex items-start justify-center">
            <div
              id="video-intro"
              className="w-full aspect-video rounded-xl bg-[hsl(0,0%,10%)] flex flex-col items-center justify-center gap-3 shadow-lg"
            >
              <PlayCircle size={56} className="text-white/80" />
              <span className="text-sm text-white/60 text-center px-4">
                Dra. Nadja Quadros — Apresentação
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground text-center max-w-sm mx-auto leading-relaxed">
          Este rastreio é uma ferramenta de triagem inicial e NÃO substitui avaliação clínica profissional.
        </p>
      </div>
    </div>
  );
}
