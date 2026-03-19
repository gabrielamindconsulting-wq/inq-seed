import { ShieldCheck, Users, GraduationCap } from 'lucide-react';
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
      <div className="max-w-lg mx-auto pt-6 pb-8 flex flex-col items-center">
        {/* Logo */}
        <img src={logo} alt="Instituto Nadja Quadros" className="h-16 object-contain mb-6" />

        {/* Badge */}
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Rastreio Gratuito
        </span>

        {/* Specialty tags */}
        <p className="text-sm text-muted-foreground font-semibold mb-6 text-center">
          TEA &middot; TDAH &middot; Neurodesenvolvimento &middot; Atrasos
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground text-center leading-tight mb-4">
          Seu filho tem sinais que você não consegue explicar?
        </h1>

        {/* Subtitle */}
        <p className="text-base text-muted-foreground text-center leading-relaxed mb-6 max-w-md">
          Responda 6 perguntas em menos de 3 minutos e receba uma análise gratuita baseada nos marcos do desenvolvimento neuropsicomotor.
        </p>

        {/* Age pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          Iniciar rastreio gratuito
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

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground text-center max-w-sm leading-relaxed">
          Este rastreio é uma ferramenta de triagem inicial e NÃO substitui avaliação clínica profissional.
        </p>
      </div>
    </div>
  );
}
