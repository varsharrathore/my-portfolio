import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919166054013';
    const message = 'Hi! I got your website contact.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-50 animate-bounce"
    >
      <FaWhatsapp size={24} />
    </div>
  );
}