import { Scale, MapPin, Phone, Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Silva & Almeida Advocacia</span>
            </div>
            <p className="text-white/80">
              Defendendo seus direitos com seriedade, ética e dedicação há mais de 15 anos.
            </p>
            <div className="text-sm text-white/70">
              <p><strong>Horário de Atendimento:</strong></p>
              <p>Segunda a Sexta – 09h às 18h</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-accent" />
                <span className="text-white/90">(11) 91234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">contato@silvaalmeidaadv.com.br</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Endereço</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <div className="text-white/90">
                <p>Av. Paulista, 1234</p>
                <p>Conjunto 45 - Bela Vista</p>
                <p>São Paulo - SP</p>
                <p>CEP: 01310-100</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/zcxpages" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/zcxpages" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 space-y-4">
          <p className="text-sm text-white/70 text-center">
            <strong>Aviso Legal:</strong> Este site tem caráter informativo. Não constitui publicidade nem promessa de resultado, 
            conforme o Código de Ética da OAB. Os valores apresentados são meramente indicativos e podem variar conforme a complexidade do caso.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p className="text-center md:text-left">&copy; 2024 Silva & Almeida Advocacia. Todos os direitos reservados.</p>
            <p className="text-center md:text-right">Dr. Carlos Silva - OAB/SP 123.456 • Dra. Mariana Almeida - OAB/SP 234.567</p>
          </div>
          
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-xs text-white/50">Desenvolvido por ZcxPages</p>
          </div>
        </div>
      </div>
    </footer>
  );
};