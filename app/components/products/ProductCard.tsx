"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  console.log(productRating);

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1
    cursor-pointer
    border-[1.2px]
    border-[#323232]
    rounded-xl
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    bg-[#212121]
    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      bg-[#212121]
      "
      >
        <div className="aspect-square overflow-hidden relative w-full ">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain bg-white rounded-xl"
          />
        </div>
        <div className="mt-4 text-white font-semibold text-sm">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} valoraciones</div>
        <div className="text-lg font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
