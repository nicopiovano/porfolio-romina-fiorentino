export function Skills() {
  const skillCategories = [
    {
      category: 'Gestión del Talento',
      skills: [
        { name: 'Reclutamiento y Selección', level: 95 },
        { name: 'Onboarding y Offboarding', level: 90 },
        { name: 'Evaluación de Desempeño', level: 88 },
        { name: 'Planes de Desarrollo', level: 85 }
      ]
    },
    {
      category: 'Gestión Organizacional',
      skills: [
        { name: 'Cultura Organizacional', level: 90 },
        { name: 'Gestión del Cambio', level: 85 },
        { name: 'Employer Branding', level: 82 },
        { name: 'Employee Experience', level: 88 }
      ]
    },
    {
      category: 'Herramientas y Software',
      skills: [
        { name: 'SAP SuccessFactors', level: 80 },
        { name: 'Workday', level: 75 },
        { name: 'LinkedIn Recruiter', level: 92 },
        { name: 'Microsoft Office Suite', level: 95 }
      ]
    },
    {
      category: 'Habilidades Blandas',
      skills: [
        { name: 'Comunicación', level: 95 },
        { name: 'Negociación', level: 80 },
        { name: 'Resolución de Conflictos', level: 90 },
        { name: 'Liderazgo de Equipos', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="mb-4">Habilidades y Competencias</h2>
          <p className="text-gray-600 text-lg">
            Conjunto de competencias técnicas y blandas desarrolladas a lo largo de mi carrera
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-900 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h3 className="mb-4">Idiomas</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-900 mb-1">Español</p>
              <p className="text-gray-600 text-sm">Nativo</p>
            </div>
            <div>
              <p className="text-gray-900 mb-1">Inglés</p>
              <p className="text-gray-600 text-sm">Básico (A2)</p>
            </div>
            {/* <div>
              <p className="text-gray-900 mb-1">Francés</p>
              <p className="text-gray-600 text-sm">Intermedio (B1)</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
