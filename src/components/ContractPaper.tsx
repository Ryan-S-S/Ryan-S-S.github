import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function ContractPaper() {
  const [signature, setSignature] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  const handleSignatureComplete = () => {
    if (signature.trim()) {
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSignatureComplete();
    }
  };

  return (
    <Card 
      className="w-full max-w-md mx-4 p-8 relative overflow-visible shadow-2xl"
      style={{ 
        transform: 'rotate(-0.5deg)',
        zIndex: 10,
      }}
      data-testid="card-contract"
    >
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="text-card-foreground/40"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h1 className="font-playfair text-3xl font-bold text-card-foreground" data-testid="text-title">
            Contrato de Namoro
          </h1>
          <div className="w-20 h-px bg-card-foreground/30 mx-auto"></div>
        </div>

        <div className="space-y-4 font-crimson text-base leading-relaxed text-card-foreground">
          <p className="text-center italic" data-testid="text-preamble">
            Por este instrumento particular de afeto e compromisso mútuo,
          </p>

          <div className="space-y-3">
            <div className="flex gap-3" data-testid="clause-1">
              <span className="font-semibold min-w-[1.5rem]">1.</span>
              <p>Declaro que te amo de todo o meu coração e prometo cuidar desse amor com dedicação e carinho todos os dias.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-2">
              <span className="font-semibold min-w-[1.5rem]">2.</span>
              <p>Me comprometo a estar ao seu lado nos momentos bons e também nos difíceis, oferecendo sempre o máximo da minha atenção e do meu afeto.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-3">
              <span className="font-semibold min-w-[1.5rem]">3.</span>
              <p>Prometo respeitar seus sonhos, apoiar seus objetivos e celebrar cada uma de suas conquistas como se fossem minhas.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-4">
              <span className="font-semibold min-w-[1.5rem]">4.</span>
              <p>Me comprometo a compartilhar com você minhas vitórias, meus fracassos e todas as experiências que a vida nos proporcionar juntos.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-5">
              <span className="font-semibold min-w-[1.5rem]">5.</span>
              <p>Prometo ser sincero, leal e construir ao seu lado uma história linda, repleta de amor, cumplicidade e ternura.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-6">
              <span className="font-semibold min-w-[1.5rem]">6.</span>
              <p>Me comprometo a respeitar seus medos e traumas, a te ajudar a superá-los e a te acolher com amor sempre que enfrentar uma crise.</p>
            </div>

            <div className="flex gap-3" data-testid="clause-7">
              <span className="font-semibold min-w-[1.5rem]">7.</span>
              <p>Declaro ainda que este compromisso é mútuo — tudo o que prometo a você, também espero de volta. Que este seja um pacto de amor verdadeiro, onde ambos cuidem um do outro com o mesmo carinho, respeito e entrega.</p>
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <div className="space-y-2">
              <div className="text-center text-sm text-card-foreground/70">
                Assinado com todo o meu amor,
              </div>
              <div className="text-center">
                <div className="font-vibes text-3xl text-card-foreground" data-testid="text-signature">
                  Ryan S. Santana
                </div>
                <div className="w-32 h-px bg-card-foreground/30 mx-auto mt-1"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-center text-sm text-card-foreground/70">
                Aceito e assino,
              </div>
              <div className="text-center">
                {signature && !isEditing ? (
                  <div className="font-vibes text-3xl text-card-foreground" data-testid="text-signature-partner">
                    {signature}
                  </div>
                ) : (
                  <Input
                    type="text"
                    placeholder="Sua assinatura aqui..."
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    onBlur={handleSignatureComplete}
                    onKeyPress={handleKeyPress}
                    className="font-vibes text-2xl text-center bg-transparent border-0 border-b border-card-foreground/30 rounded-none focus-visible:ring-0 focus-visible:border-card-foreground/60 placeholder:text-card-foreground/40 placeholder:font-crimson placeholder:text-sm"
                    data-testid="input-signature"
                  />
                )}
                <div className="w-32 h-px bg-card-foreground/30 mx-auto mt-1"></div>
              </div>
            </div>

            <div className="text-center text-sm text-card-foreground/60" data-testid="text-date">
              {new Date().toLocaleDateString('pt-BR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-card-foreground/20"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>

        {signature && !isEditing && (
          <div className="flex justify-center pt-4 print:hidden">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="gap-2 bg-card text-card-foreground border-card-border hover:bg-card"
              data-testid="button-print"
            >
              <Printer className="w-4 h-4" />
              Imprimir Contrato
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
