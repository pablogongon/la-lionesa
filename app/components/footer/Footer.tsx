import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from "react-icons/md"
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai"
const Footer = () => {
    return ( <footer className="rounded-t-3xl bg-[#323232] text-white text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="mb-3 text-xl font-bold text-[#B36F09]">Categorias</h3>
                    <Link href="?category=Tecnología">Tecnologia</Link>
                    <Link href="?category=Gimnasio">Gimnasio</Link>
                    <Link href="?category=Hogar">Hogar</Link>
                    <Link href="?category=Bisutería">Bisutería</Link>
                    <Link href="?category=Otros">Otros</Link>
                </FooterList>
                <FooterList>
                    <h3 className="mb-3 text-xl font-bold text-[#B36F09]">Atención al cliente</h3>
                    <Link href="#">Contacto</Link>
                    <Link href="#">Política de envíos</Link>
                    <Link href="#">Sobre nosotros</Link>
                    <Link href="#">FAQ</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className=" mb-3 text-xl font-bold text-[#B36F09]">Sobre Nosotros</h3>
                    <p className="mb-2 ">¡Somos una tienda única en su clase! En nuestro espacio, fusionamos lo mejor de la tecnología, el fitness, la decoración y los accesorios para brindarte una experiencia de compra incomparable. </p>
                    <p>&copy; {new Date().getFullYear()} Tienda. Todos los derechos reservados. </p>
                    </div>
                <FooterList>
                    <h3 className="mb-3 text-xl font-bold text-[#B36F09]">Síguenos en</h3>
                    <div className="flex gap-2">
                        <Link href="#">
                            <MdFacebook size={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillTwitterCircle size={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillInstagram size={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillYoutube size={24}/>
                        </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer>  );
}
 
export default Footer;