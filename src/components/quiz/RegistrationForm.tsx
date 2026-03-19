import { useState } from 'react';
import { User, Mail, Phone, Baby, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import logo from '@/assets/logo-inq.png';

export interface RegistrationData {
  responsibleName: string;
  email: string;
  phone: string;
  childName: string;
  birthDate: string;
}

interface Props {
  onSubmit: (data: RegistrationData) => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function RegistrationForm({ onSubmit }: Props) {
  const [form, setForm] = useState<RegistrationData>({
    responsibleName: '',
    email: '',
    phone: '',
    childName: '',
    birthDate: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.responsibleName.trim()) e.responsibleName = 'Campo obrigatório';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido';
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Celular inválido';
    if (!form.childName.trim()) e.childName = 'Campo obrigatório';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  return (
    <div className="min-h-screen bg-bubble-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Instituto Nadja Quadros" className="h-20 object-contain" />
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-1">
            Rastreio de Desenvolvimento Neuropsicomotor
          </h1>
          <p className="text-sm text-secondary text-center font-semibold mb-4">
            Campanha dos Primeiros 1000 Dias | Instituto Nadja Quadros
          </p>
          <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
            Este rastreio gratuito foi desenvolvido para ajudar a identificar marcos do desenvolvimento do seu filho(a). 
            Responda com atenção — não é um diagnóstico, mas um cuidado preventivo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="responsibleName" className="text-foreground font-semibold text-sm flex items-center gap-2 mb-1">
                <User size={16} className="text-primary" /> Nome completo do responsável
              </Label>
              <Input
                id="responsibleName"
                value={form.responsibleName}
                onChange={e => setForm(f => ({ ...f, responsibleName: e.target.value }))}
                className="border-input focus:ring-ring"
              />
              {errors.responsibleName && <p className="text-destructive text-xs mt-1">{errors.responsibleName}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-semibold text-sm flex items-center gap-2 mb-1">
                <Mail size={16} className="text-primary" /> E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-semibold text-sm flex items-center gap-2 mb-1">
                <Phone size={16} className="text-primary" /> Celular
              </Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: formatPhone(e.target.value) }))}
                placeholder="(XX) XXXXX-XXXX"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="childName" className="text-foreground font-semibold text-sm flex items-center gap-2 mb-1">
                <Baby size={16} className="text-primary" /> Nome da criança
              </Label>
              <Input
                id="childName"
                value={form.childName}
                onChange={e => setForm(f => ({ ...f, childName: e.target.value }))}
              />
              {errors.childName && <p className="text-destructive text-xs mt-1">{errors.childName}</p>}
            </div>

            <div>
              <Label htmlFor="birthDate" className="text-foreground font-semibold text-sm flex items-center gap-2 mb-1">
                <Calendar size={16} className="text-primary" /> Data de nascimento da criança (opcional)
              </Label>
              <Input
                id="birthDate"
                type="date"
                value={form.birthDate}
                onChange={e => setForm(f => ({ ...f, birthDate: e.target.value }))}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base font-bold mt-2">
              Começar o Rastreio
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
