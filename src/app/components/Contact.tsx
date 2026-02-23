import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const CONTACT_EMAIL = 'fiorentinoromi@gmail.com';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Contacto desde portfolio - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Contacto</h2>
          <p className="text-gray-600 text-lg">
            ¿Tienes una oportunidad interesante? Me encantaría conocerla
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="mb-6">Información de Contacto</h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-900 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Teléfono</p>
                <a href="tel:+5491161713511" className="text-gray-900 hover:underline">
                  +54 9 11 6171 3511
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/romina-fiorentino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline"
                >
                  linkedin.com/in/romina-fiorentino/
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Ubicación</p>
                <p className="text-gray-900">Buenos Aires, Argentina</p>
                <p className="text-gray-600 text-sm">Disponible para trabajo remoto</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="mb-6">Envíame un Mensaje</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <p className="text-gray-900 font-medium text-lg">¡Listo! Se abrió tu cliente de correo.</p>
                <p className="text-gray-500 text-sm">Revisá que el correo se haya enviado correctamente.</p>
                <button
                  onClick={() => { setSent(false); setName(''); setEmail(''); setMessage(''); }}
                  className="mt-2 text-sm text-gray-500 underline cursor-pointer hover:text-gray-900"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Cuéntame sobre la oportunidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
