type Props = {
  selectedCategory: string
  onCategoryChange: (value: string) => void
  price: number
  onPriceChange: (value: number) => void
}

export default function SidebarFilters({
  selectedCategory,
  onCategoryChange,
  price,
  onPriceChange,
}: Props) {
  return (
    <aside className="w-64 bg-[#0658A8] text-white rounded-lg p-6 h-fit shadow-lg">
      {/* Category */}
      <div>
        <h2 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2">Category</h2>

        <div className="space-y-3 text-sm">
          {["all", "electronics", "clothing", "home"].map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-8">
        <h2 className="font-bold text-lg mb-4 border-b border-blue-400 pb-2">Price</h2>

        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer slider"
        />

        <div className="flex justify-between text-sm mt-3 font-medium">
          <span>$0</span>
          <span className="bg-white text-[#0658A8] px-3 py-1 rounded font-bold">${price}</span>
        </div>
      </div>
    </aside>
  )
}
