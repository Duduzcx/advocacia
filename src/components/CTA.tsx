import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Precisa de orientação jurídica?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Entre em contato agora e receba uma análise inicial gratuita do seu caso. 
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 gap-3">
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 gap-3">
              <Phone className="h-5 w-5" />
              Ligar agora
            </Button>
          </div>
          
          <p className="text-sm text-white/70 pt-4">
            Consulta inicial gratuita • Atendimento 24h • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};