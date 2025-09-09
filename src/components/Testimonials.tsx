import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    content: "Excelente atendimento! Resolveram minha questão trabalhista com muita competência e agilidade. Recomendo sem hesitar.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Autônomo",
    content: "Profissionais sérios e dedicados. Me senti seguro durante todo o processo. Resultado superou minhas expectativas.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Comerciante",
    content: "Atendimento personalizado e humanizado. Explicaram tudo de forma clara e estiveram sempre disponíveis.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos clientes é o nosso maior patrimônio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-accent/50" />
                
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-primary">
            Membro ativo da OAB • Certificações em Direito Trabalhista e Empresarial
          </p>
        </div>
      </div>
    </section>
  );
};