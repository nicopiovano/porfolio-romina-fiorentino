export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2026 Romina Fiorentino. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/80 text-sm">
            Diseñado por <a href="https://nico-piovano-porfolio.vercel.app/es" target="_blank" rel="noopener noreferrer" className="hover:underline">Nicolás Piovano</a> - 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
