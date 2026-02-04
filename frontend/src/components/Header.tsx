import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { Search } from "lucide-react"
import { useCartStore } from "@/store/cartStore"

type Props = {
  search: string
  onSearchChange: (value: string) => void
}

export default function Header({ search, onSearchChange }: Props) {
  const items = useCartStore((state)=> state.items)
  const totalCount = items.reduce((sum,item)=> sum + item.quantity, 0)

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-700 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        Logo
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-300"
        />
        
      </div>

      {/* Cart & Profile */}
      <div className="flex items-center gap-6">
        <div className="relative">
                  <Link href="/cart" className="relative">

          <ShoppingCart />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white font-semibold min-w-[20px] text-center">
              {totalCount}
            </span>
          )}
          </Link>
        </div>
        <User />
      </div>
    </header>
  )
}
