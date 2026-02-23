import { Mail, Linkedin, FileText } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-900">Romina Fiorentino</h1>
          <nav className="hidden md:flex items-center gap-8">
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experiencia
            </button>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Educación
            </button>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Habilidades
            </button>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contacto
            </button>
          </nav>
          <div className="flex md:hidden gap-3">
            <a href="mailto:romina.fiorentino@email.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/romina-fiorentino/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
