import React from 'react';

const Faq = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-[#B36F09] mb-6">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#323232] rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-[#B36F09]">¿Qué tipo de productos ofrece La Lionesa?</h3>
                    <p className="text-white">Bienvenido a La Lionesa, donde la innovación y el bienestar se encuentran en un solo lugar. En La Lionesa, nos dedicamos a ofrecerte una amplia gama de productos cuidadosamente seleccionados para satisfacer tus necesidades tecnológicas, de gimnasio, bisutería y hogar. Desde los dispositivos más avanzados hasta los accesorios más elegantes, estamos comprometidos a brindarte calidad y estilo en cada compra.</p>
                </div>
                <div className="bg-[#323232] rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-[#B36F09]">¿Cuál es la filosofía de La Lionesa?</h3>
                    <p className="text-white">Nuestra pasión por la tecnología, el fitness, la moda y el confort del hogar se refleja en cada artículo que ofrecemos. Nos esforzamos por proporcionarte una experiencia de compra excepcional, con un servicio al cliente dedicado y asesoramiento experto. Únete a nuestra comunidad y descubre cómo podemos ayudarte a llevar tu vida al siguiente nivel.</p>
                </div>
                <div className="bg-[#323232] rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-[#B36F09]">¿Cómo puedo contactar con el servicio de atención al cliente?</h3>
                    <p className="text-white">Puedes contactar con nuestro servicio de atención al cliente a través de nuestro formulario en línea en nuestra página de contacto. Estamos aquí para ayudarte con cualquier pregunta o consulta que puedas tener sobre nuestros productos o tu experiencia de compra en La Lionesa.</p>
                </div>
                <div className="bg-[#323232] rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-[#B36F09]">¿Ofrecen envíos internacionales?</h3>
                    <p className="text-white">Sí, ofrecemos envíos internacionales a la mayoría de los países. Para obtener más información sobre los costos de envío y los tiempos de entrega, consulta nuestra sección de Envíos y Entregas en el sitio web.</p>
                </div>
                {/* Añade más preguntas y respuestas según sea necesario */}
            </div>
        </div>
    );
}

export default Faq;
