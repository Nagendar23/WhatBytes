export default function SidebarFilters() {
  return (
    <aside className="w-64 bg-blue-700 text-white rounded-lg p-5 h-fit">
      <div>
        <h2 className="font-semibold mb-3 ">Category</h2>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            All
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Electronics
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Clothing
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Home
          </label>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-semibold mb-3">Price</h2>
        <input type="range" min={0} max={1000} className="w-full" />
        <div className="flex justify-between text-xs mt-1">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    </aside>
  );
}
