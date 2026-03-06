import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, MapPin } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export function Hero({ profileImage }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-muted rounded-full mb-4">
            <span className="text-sm text-muted-foreground">Licenciada en Administración de Recursos Humanos</span>
          </div>
          <h2 className="mb-4">
            Hola, soy Romina Fiorentino
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Proactiva y adaptable, con habilidades interpersonales y experiencia internacional en gestión de equipos, capacitación y resolución de conflictos en entornos multiculturales. <br /> Aporto ideas y soluciones para mejorar la eficiencia y la productividad de los equipos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="mailto:fiorentinoromi@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contáctame
            </a>
            <a
              href="/romina_fiorentino_cv_rrhh_2026.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              <span>Descargar CV</span>
            </a>
          </div>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/romina-fiorentino/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                linkedin.com/in/romina-fiorentino
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={profileImage}
              alt="Romina Fiorentino"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
