import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r from-[#B36F09] to-[#DB9C48] mb-8 rounded-2xl">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evently ">
                <div className="mb-8 md:mb-0 text-center ml-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Productos al mejor precio!</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Disfruta de descuentos en nuestros articulos seleccionados</p>
                    <p className="text-2xl md:text-5xl text-[#321513] font-bold">50% de descuento </p>
                </div>
                <div className="w-1/3 relative aspect-video ml-20">
    <Image src="/banner-image.png" fill alt="" className="object-container"/>
</div>

            </div>
        </div>
     );
}
 
export default HomeBanner;