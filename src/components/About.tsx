import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Silva & Almeida Advocacia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atuação em todo o estado de São Paulo e consultoria online para clientes de outros estados. 
            Nossa equipe experiente oferece soluções jurídicas eficazes e personalizadas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Nossa Equipe</h3>
            <div className="space-y-4">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary text-lg mb-2">Dr. Carlos Silva</h4>
                  <p className="text-muted-foreground mb-2">OAB/SP 123.456</p>
                  <p className="text-sm text-muted-foreground">
                    Especialista em Direito Trabalhista e Civil com mais de 15 anos de experiência.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary text-lg mb-2">Dra. Mariana Almeida</h4>
                  <p className="text-muted-foreground mb-2">OAB/SP 234.567</p>
                  <p className="text-sm text-muted-foreground">
                    Especialista em Direito Empresarial e consultoria jurídica preventiva.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Nossos Diferenciais</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong>Mais de 15 anos</strong> de experiência no mercado jurídico
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong>Mais de 800 casos</strong> atendidos com excelência
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong>92% de êxito</strong> em ações trabalhistas
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong>Atendimento personalizado</strong> para cada cliente
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  <strong>Consultoria online</strong> para todo o Brasil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};