import { ShoppingCart, User } from "lucide-react"

type Props = {
  search: string
  onSearchChange: (value: string) => void
}

export default function Header({ search, onSearchChange }: Props) {
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
          className="w-full px-4 py-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Cart + Profile */}
      <div className="flex items-center gap-6">
        <ShoppingCart />
        <User />
      </div>
    </header>
  )
}
