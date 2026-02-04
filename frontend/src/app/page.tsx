import ProductCard from "@/components/ProductCard"
import SidebarFilters from "@/components/SidebarFilters"
import { products } from "@/data/products"

export default function HomePage() {
  return (
    <div className="px-8 py-6 flex gap-6">
      {/* Sidebar */}
      <SidebarFilters />

      {/* Product Grid */}
      <div className="flex-1 grid gap-6 text-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}
