import React from 'react';

const ContactCard: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="max-w-lg mx-auto bg-[#232323] rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-[#B36F09]">Contáctanos</h1>
        <div className="mb-4">
          <p className="text-lg">Nombre: Antonio San José Martí</p>
          <p className="text-lg">Correo electrónico: tonisanjosemarti@gmail.com / grupomunditol@gmail.com</p>
          <p className="text-lg">Teléfono: 123-456-7890</p>
        </div>
        <div>
          <p className="text-lg mb-2">¡Estamos aquí para ayudarte! Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
          <p className="text-lg">Horario de atención: Lunes a Viernes, 9:00 am - 5:00 pm</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
