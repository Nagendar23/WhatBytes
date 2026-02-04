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
    <aside className="w-64 bg-blue-700 text-white rounded-lg p-5 h-fit">
      {/* Category */}
      <div>
        <h2 className="font-semibold mb-3">Category</h2>

        <div className="space-y-2 text-sm">
          {["all", "electronics", "clothing", "home"].map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <h2 className="font-semibold mb-3 text-base">Price</h2>

        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer slider"
        />

        <div className="flex justify-between text-sm mt-2 font-medium">
          <span>$0</span>
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">${price}</span>
        </div>
      </div>
    </aside>
  )
}
