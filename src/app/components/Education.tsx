import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Licenciatura en Administración de Recursos Humanos',
      institution: 'Universidad del Salvador (USAL)',
      year: '2020',
      description: 'Especialización en Recursos Humanos y Gestión de Talentos.'
    },
    // {
    //   degree: 'Licenciatura en Psicología',
    //   institution: 'Universidad Complutense de Madrid',
    //   year: '2017',
    //   description: 'Especialidad en Psicología Organizacional y del Trabajo.'
    // }
  ];

  const certifications = [
    // 'Professional in Human Resources (PHR)',
    // 'Certificación en Coaching Ejecutivo - ICF',
    // 'DISC Assessment Certified Practitioner',
    // 'Scrum Master Certified (SMC)',
    // 'Certificación en People Analytics - SHRM'
  ];

  return (
    <section id="education" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="mb-4">Educación y Certificaciones</h2>
          <p className="text-gray-600 text-lg">
            Formación continua para estar al día en las mejores prácticas de RRHH
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3>Certificaciones Profesionales</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
