import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-primary">Silva & Almeida Advocacia</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#areas" className="text-foreground hover:text-primary transition-colors">
            Áreas de Atuação
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button variant="hero" size="lg">
          Agende sua consulta
        </Button>
      </div>
    </header>
  );
};