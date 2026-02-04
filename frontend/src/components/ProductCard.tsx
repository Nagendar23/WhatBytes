import { Star } from "lucide-react";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden rounded-md">
        <img src={product.image}
         alt={product.title} />
      </div>

      <h3 className="mt-3 font-semibold text-sm">{product.title}</h3>

      <p className="text-blue-700 font-bold mt-1">${product.price}</p>

      {product.rating && (
        <div className="flex items-center gap-1 text-sm mt-1">
          <Star size={14} className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>
      )}

      <button className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Add to Cart{" "}
      </button>
    </div>
  );
}
