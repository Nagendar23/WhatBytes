import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state)=>state.addToCart)
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="h-40 w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* title */}
        <h3 className="mt-3 font-semibold text-base text-gray-800 line-clamp-2">
          {product.title}
        </h3>
      </Link>

      {/* price */}
      <p className="text-blue-700 font-bold text-lg mt-2">${product.price}</p>

      {/* rating */}
      {product.rating && (
        <div className="flex items-center gap-1 text-sm mt-2 text-gray-600">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="font-medium">{product.rating}</span>
        </div>
      )}

      <button
      onClick={()=> addToCart(product)}
      className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Add to Cart
      </button>
    </div>
  );
}
