import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-hero text-white flex items-center pt-24">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Defendendo seus direitos com{" "}
            <span className="text-accent">seriedade</span> e{" "}
            <span className="text-accent">dedicação</span>
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Mais de 15 anos de experiência no Direito Civil, Trabalhista e Empresarial. 
            Mais de 800 casos atendidos, com 92% de êxito em ações trabalhistas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511921572675?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+jur%C3%ADdica!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Agende sua consulta
              </Button>
            </a>
            <a
              href="https://wa.me/5511921572675?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+jur%C3%ADdicos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/20 border-white/50 text-white hover:bg-white/30 hover:border-white/70">
                Saiba mais
              </Button>
            </a>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="/lovable-uploads/e896d9bf-28a4-48ca-9007-7618c916240e.png" 
            alt="Advogado profissional em escritório"
            className="rounded-2xl shadow-elegant w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
};