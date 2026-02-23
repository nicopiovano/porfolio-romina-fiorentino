import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Experiencia Internacional',
      company: 'México, España y Brasil',
      period: 'Agosto 2023 - Enero 2026',
      description: 'He reducido el tiempo de contratación en un 40% e implementado un programa de desarrollo que ha mejorado la retención en un 25%.',
      achievements: [
        'ACA y selección de perfiles logísticos, operarios y administrativos.',
        'PONER de avisos, filtrado de CVs y realización de entrevistas.',
        'COSAS de candidatos, coordinación de ingresos',
        'VIAJANTES con clientes.',
      ]
    },
    {
      title: 'Selectora Semi SR',
      company: 'Grupo Gestión',
      period: 'Agosto 2021 - Julio 2023',
      // description: 'Gestiono la estrategia de talento para 200+ empleados. He reducido el tiempo de contratación en un 40% e implementado un programa de desarrollo que ha mejorado la retención en un 25%.',
      achievements: [
        'Reclutamiento y selección de perfiles logísticos, operarios y administrativos.',
        'Publicación de avisos, filtrado de CVs y realización de entrevistas.',
        'Seguimiento de candidatos, coordinación de ingresos',
        'Comunicación con clientes.',
      ]
    },
    {
      title: 'Pasante Administrativa y Recursos Humanos',
      company: 'Soluciones & Emprendimientos S.R.L',
      period: 'Noviembre 2019 - Mayo 2020',
      // description: 'Responsable de procesos de selección end-to-end para clientes de diversos sectores. Gestioné más de 150 procesos anuales con una tasa de éxito del 90%.',
      achievements: [
        'Búsquedas de perfiles IT, armados de CVs.',
        'Registración de los gastos, tramites bancarios, cobranzas. ',
        'Carga de datos del F931 y ART'
      ]
    },
    {
      title: 'Administrativa y Recursos Humanos',
      company: 'Biofuel S.A.',
      period: 'Abril 2017 - Septiembre 2019',
      // description: 'Coordiné el área de RRHH para 5 tiendas (80 empleados). Gestión de nóminas, relaciones laborales y programas de formación.',
      achievements: [
        'Facturación, cobranzas, manejo de sistema contable SETUP, tramites bancarios.',
        'Cargas de datos F 931 y ART',
        'Manejo de personal, capacitación, evaluación de desempeño, resolución de conflictos',
        'Recepción de clientes y documentación'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="mb-4">Experiencia Profesional</h2>
          <p className="text-gray-600 text-lg">
            Mi trayectoria profesional en recursos humanos
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">Logros destacados:</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
