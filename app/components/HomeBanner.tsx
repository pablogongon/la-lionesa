import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r from-[#B36F09] to-[#DB9C48] mb-8 rounded-2xl">
            <div className="mx-auto px-4 py-8 md:px-8 md:py-12 flex flex-col md:flex-row items-center justify-center">
                <div className="text-center md:text-left mb-4 md:mb-0 md:mr-8">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white mb-2">Productos al mejor precio!</h1>
                    <p className="text-base md:text-lg xl:text-xl text-white mb-2">Disfruta de descuentos en nuestros artículos seleccionados</p>
                    <p className="text-lg md:text-xl xl:text-5xl text-[#321513] xl:justify-center font-bold">50% de descuento </p>
                    <p className="mt-5 text-lg md:text-xl xl:text-4xl text-[#005927] xl:justify-center font-semibold">🚚 Envio en 24h </p>
                </div>
                <div className="w-full md:w-1/3 relative aspect-video mb-4 md:mb-0">
                    <div className="mx-auto w-full md:w-auto relative aspect-video">
                        <Image src="/banner-image.png" layout="fill" objectFit="contain" alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;
