import { Mail, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-foreground">Romina Fiorentino</h1>
          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Mí
            </button>
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experiencia
            </button>
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('education')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Educación
            </button>
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Habilidades
            </button>
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contacto
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="flex md:hidden gap-3">
              <a href="mailto:romina.fiorentino@email.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/romina-fiorentino/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
