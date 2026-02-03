import { ShoppingCart, User } from "lucide-react";

export default function Header(){
    return(
        <header className="flex items-center justify-between px-8 px-4 bg-blue-700 text-white">
            <div className="text-xl font-bold">
                Logo
            </div>
            <div className="w-1/3 ">
                <input type="text" 
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-md text-black outline-none"
                />
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <ShoppingCart/>
                </div>
                <User/>
            </div>
        </header>
    )
}