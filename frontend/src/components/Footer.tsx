import { Facebook, Twitter, Instagram } from "lucide-react";


export default function Footer(){
    return(
        <footer className="bg-blue-900 text-white px-8 py-6 mt-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* left side */}
                <div>
                    <p className="font-semibold">Filters</p>
                    <p>All . Electronics . Clothing . Home</p>
                </div>

                {/* center */}
                <div>
                    <p className="font-semibold">About </p>
                    <p className="text-sm opacity-80">About Us </p>
                    <p className="text-sm opacity-80">Contact</p>
                </div>
                {/* right side */}
                <div>
                    <p className="font-semibold mb-2">Follow Us</p>
                    <div className="flex gap-4">
                        <Facebook size={18}/>
                        <Twitter size={18}/>
                        <Instagram size={18}/>
                    </div>
                </div>

            </div>
            <p className="text-center text-sm opacity-70 mt-6">© 2026 WhatBytes</p>

        </footer>
    )
}
