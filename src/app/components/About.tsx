import { Users, Target, Heart, TrendingUp, Brain } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Users,
      title: 'Enfoque en las Personas',
      description: 'Creo que el éxito de una organización comienza con empleados motivados y valorados.'
    },

    {
      icon: Brain,
      title: 'Gestión del Talento',
      description: 'Identifico, desarrollo y retengo talento clave para sostener el crecimiento.'
    },
    {
      icon: Heart,
      title: 'Empatía y Comunicación',
      description: 'Facilito diálogos abiertos y construyo relaciones de confianza con todos los niveles.'
    },
    {
      icon: TrendingUp,
      title: 'Mejora Continua',
      description: 'Busco constantemente innovar y optimizar procesos de recursos humanos.'
    },
    // {
    //   icon: Target,
    //   title: 'Orientación a Resultados',
    //   description: 'Implemento estrategias basadas en datos para mejorar métricas clave de RRHH.'
    // },
    // {
    //   icon: ShieldCheck,
    //   title: 'Ética y Cumplimiento',
    //   description: 'Garantizo prácticas justas, transparentes y alineadas con la normativa vigente.'
    // },
    // {
    //   icon: Brain,
    //   title: 'Gestión del Talento',
    //   description: 'Identifico, desarrollo y retengo talento clave para sostener el crecimiento.'
    // },
    // {
    //   icon: Zap,
    //   title: 'Agilidad y Adaptación',
    //   description: 'Respondo rápido al cambio y ajusto procesos sin frenar al negocio.'
    // }
  ];

  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="mb-4">Sobre Mí</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Profesional de Recursos Humanos con sólidas habilidades interpersonales, alta capacidad de escucha, comunicación efectiva y gestión de relaciones. Fui reconocida por generar confianza, facilitar el diálogo y acompañar a las personas en contextos de cambio, adaptación y desarrollo profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
