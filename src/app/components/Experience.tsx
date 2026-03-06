import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Experiencia Internacional",
      company: "México, España y Brasil",
      period: "Agosto 2023 - Enero 2026",
      // description:
        // "He reducido el tiempo de contratación en un 40% e implementado un programa de desarrollo que ha mejorado la retención en un 25%.",
      achievements: [
        "Coordiné y supervisié equipos multiculturales.",
        "Organicé turnos y acompañé colaboradores e ingresantes para una mejor adaptación y trabajo en equipo.",
        "Realicé capacitaciones para mejorar el desempeño y la satisfacción laboral.",
        "Intervine en la comunicación de normas de convencia y resolución de conflictos para mejorar el clima laboral",
      ],
    },
    {
      title: "Selectora Semi SR",
      company: "Grupo Gestión",
      period: "Agosto 2021 - Julio 2023",
      // description: 'Gestiono la estrategia de talento para 200+ empleados. He reducido el tiempo de contratación en un 40% e implementado un programa de desarrollo que ha mejorado la retención en un 25%.',
      achievements: [
        "Recluté y seleccioné perfiles logísticos, operarios y administrativos.",
        "Publiqué de avisos, filtrado de CVs y realización de entrevistas.",
        "Seguí a candidatos, coordiné ingresos",
        "Comuniqué con clientes.",
      ],
    },
    {
      title: "Pasante Administrativa y Recursos Humanos",
      company: "Soluciones & Emprendimientos S.R.L",
      period: "Noviembre 2019 - Mayo 2020",
      // description: 'Responsable de procesos de selección end-to-end para clientes de diversos sectores. Gestioné más de 150 procesos anuales con una tasa de éxito del 90%.',
      achievements: [
        "Búsquedas de perfiles IT, armados de CVs.",
        "Registré los gastos, tramites bancarios, cobranzas. ",
        "Cargué datos del F931 y ART",
      ],
    },
    {
      title: "Administrativa y Recursos Humanos",
      company: "Biofuel S.A.",
      period: "Abril 2017 - Septiembre 2019",
      // description: 'Coordiné el área de RRHH para 5 tiendas (80 empleados). Gestión de nóminas, relaciones laborales y programas de formación.',
      achievements: [
        "Facturación, cobranzas, manejo de sistema contable SETUP, tramites bancarios.",
        "Cargas de datos F 931 y ART",
        "Manejo de personal, capacitación, evaluación de desempeño, resolución de conflictos",
        "Recepcioné clientes y documentación",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="mb-4">Experiencia Profesional</h2>
          <p className="text-muted-foreground text-lg">
            Mi trayectoria profesional en recursos humanos
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-primary/10 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/[0.06] before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:rounded-l-xl after:bg-gradient-to-b after:from-primary/40 after:to-primary/10 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100"
            >
              <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Logros destacados:
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-muted-foreground/70 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
