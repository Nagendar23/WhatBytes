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
    <header className="flex items-center justify-between px-8 py-4 bg-[#0658A8] text-white shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
        <img
    src="/whatbytes_logo.jpg"
    alt="WhatBytes"
    className="h-10 sm:h-12 w-auto object-contain rounded-sm bg-white/5 p-1 shadow-sm"
  />
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-gray-800 bg-white outline-none focus:ring-2 focus:ring-[#0658A8] placeholder-gray-500"
        />
      </div>

      {/* Cart & Profile */}
      <div className="flex items-center gap-6">
        <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
          <ShoppingCart size={24} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white font-bold min-w-[20px] text-center">
              {totalCount}
            </span>
          )}
        </Link>
        <User size={24} className="hover:opacity-80 transition-opacity cursor-pointer" />
      </div>
    </header>
  )
}
