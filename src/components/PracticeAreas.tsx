import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Building2 } from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Defesa completa dos direitos do trabalhador e assessoria jurídica para empregadores.",
    features: ["Rescisões", "Horas extras", "Assédio moral", "Acordos trabalhistas"]
  },
  {
    icon: Briefcase,
    title: "Direito Civil",
    description: "Soluções jurídicas para questões pessoais, contratuais e familiares.",
    features: ["Contratos", "Direito de família", "Indenizações", "Inventários"]
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Assessoria jurídica estratégica para empresas de todos os portes.",
    features: ["Constituição de empresas", "Contratos comerciais", "Recuperação judicial", "Compliance"]
  }
];

export const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos com excelência nas principais áreas do direito, oferecendo soluções personalizadas para cada caso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <a
            href="https://wa.me/5511921572675?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+%C3%A1reas+de+atua%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg">
              Saiba mais sobre cada área
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};