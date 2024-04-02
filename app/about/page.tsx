import React from 'react';
import Container from "../components/Container";
import { FaHistory, FaBullseye, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <div className="bg-[#212121] text-white">
            <Container>
                <div className="py-12 px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#B36F09]">Acerca de Nosotros</h1>
                        <p className="text-lg mt-2">Conoce nuestra historia, nuestra misión y nuestros valores</p>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#323232]">
                        <img className="w-full h-64 object-cover object-center" src="/1.jpg" alt="Nuestra Historia" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-[#B36F09] mb-2">Nuestra Historia</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie neque vitae justo accumsan fermentum.</p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#323232]">
                        <img className="w-full h-64 object-cover object-center" src="/2.jpg" alt="Nuestra Misión" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-[#B36F09] mb-2">Nuestra Misión</h2>
                            <p className="text-white">En nuestra empresa, estamos comprometidos a brindar los mejores productos y servicios a nuestros clientes.</p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#323232]">
                        <img className="w-full h-64 object-cover object-center" src="/3.jpg" alt="Nuestros Valores" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-[#B36F09] mb-2">Nuestros Valores</h2>
                            <p className="text-white">Nos esforzamos por ofrecer productos y servicios de la más alta calidad, innovando constantemente y comprometiéndonos a brindar un excelente servicio al cliente.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="py-12 px-4">
                    <div className="text-center">
                        <p className="text-lg text-white">
                        Bienvenido a La Lionesa, donde la innovación y el bienestar se encuentran en un solo lugar. En La Lionesa, nos dedicamos a ofrecerte una amplia gama de productos cuidadosamente seleccionados para satisfacer tus necesidades tecnológicas, de gimnasio, bisutería y hogar. Desde los dispositivos más avanzados hasta los accesorios más elegantes, estamos comprometidos a brindarte calidad y estilo en cada compra. Nuestra pasión por la tecnología, el fitness, la moda y el confort del hogar se refleja en cada artículo que ofrecemos. Nos esforzamos por proporcionarte una experiencia de compra excepcional, con un servicio al cliente dedicado y asesoramiento experto. Únete a nuestra comunidad y descubre cómo podemos ayudarte a llevar tu vida al siguiente nivel. ¡Gracias por elegirnos como tu destino de compras preferido!
                        </p>
                    </div>
                </div>
            </Container>

            

            

            <Container>
    <div className="py-12 px-4">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-[#B36F09] mb-4">Nuestros Clientes</h2>
            <p className="text-lg text-white">Lo que dicen nuestros clientes sobre nosotros...</p>
            <div className="flex flex-col-4 justify-center mt-8">
                <div className="max-w-lg mx-auto space-y-4 ">
                    <div className="bg-[#323232] rounded-lg shadow p-4">
                        <p className="text-white">¡Increíble servicio! Pedí un producto y llegó antes de lo esperado, además de ser de excelente calidad.</p>
                        <p className="text-white">- María López</p>
                    </div>
                    <div className="bg-[#323232] rounded-lg shadow p-4">
                        <p className="text-white">Estoy muy satisfecho con mi compra. El artículo era exactamente lo que estaba buscando y el envío fue rápido.</p>
                        <p className="text-white">- Juan García</p>
                    </div>
                    <div className="bg-[#323232] rounded-lg shadow p-4">
                        <p className="text-white">Excelente atención al cliente. Me ayudaron con todas mis dudas y el proceso de compra fue muy sencillo.</p>
                        <p className="text-white">- Ana Martínez</p>
                    </div>
                    <div className="bg-[#323232] rounded-lg shadow p-4">
                        <p className="text-white">¡Recomiendo totalmente esta tienda! Los productos son de alta calidad y el servicio es impecable.</p>
                        <p className="text-white">- Carlos Rodríguez</p>
                    </div>
                    <div className="bg-[#323232] rounded-lg shadow p-4">
                        <p className="text-white">Muy contento con mi compra. Sin duda volveré a comprar en esta tienda en el futuro.</p>
                        <p className="text-white">- Laura Pérez</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Container>


            

        </div>
    );
}

export default About;
