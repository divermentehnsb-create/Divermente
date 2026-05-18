import { FiMessageCircle } from 'react-icons/fi';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/528001234567?text=Hola%20DiverMente,%20me%20interesa%20conocer%20sus%20servicios"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 text-white shadow-glow transition hover:bg-green-700"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <FiMessageCircle size={20} />
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;
