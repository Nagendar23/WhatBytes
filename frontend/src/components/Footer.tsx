import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#054580] text-white ">
            {/* Top call-to-action bar */}
            {/* <div className="bg-[#0658A8]">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xl font-bold">Stay ahead with new drops</p>
                        <p className="text-sm text-blue-100">Get early access to launches, deals, and curated picks.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/"
                            className="bg-white text-[#0658A8] px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-sm"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-white/60 px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                        >
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </div> */}

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <p className="font-bold text-lg mb-4">Shop</p>
                        <div className="space-y-2 text-sm text-blue-100">
                            <Link href="/" className="hover:text-white transition-colors">All Products</Link>
                            <Link href="/?category=electronics" className="hover:text-white transition-colors">Electronics</Link>
                            <Link href="/?category=clothing" className="hover:text-white transition-colors">Clothing</Link>
                            <Link href="/?category=home" className="hover:text-white transition-colors">Home</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg mb-4">Customer Care</p>
                        <div className="space-y-2 text-sm text-blue-100">
                            <Link href="/cart" className="hover:text-white transition-colors">Your Cart</Link>
                            <p className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</p>
                            <p className="hover:text-white transition-colors cursor-pointer">FAQ</p>
                            <p className="hover:text-white transition-colors cursor-pointer">Support</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg mb-4">Company</p>
                        <div className="space-y-2 text-sm text-blue-100">
                            <p className="hover:text-white transition-colors cursor-pointer">About Us</p>
                            <p className="hover:text-white transition-colors cursor-pointer">Careers</p>
                            <p className="hover:text-white transition-colors cursor-pointer">Press</p>
                            <p className="hover:text-white transition-colors cursor-pointer">Contact</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg mb-4">Follow Us</p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white  flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Facebook size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white  flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Twitter size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white  flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Instagram size={18} />
                            </div>
                        </div>
                        <p className="text-sm text-blue-100">Join 10k+ shoppers who get our weekly picks.</p>
                    </div>
                </div>

                <div className="border-t border-white/15 mt-10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-blue-100">
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-semibold text-white">WhatBytes</span>
                        <span>© 2026 All rights reserved.</span>
                    </div>
                    <div className="flex gap-4">
                        <p className="hover:text-white transition-colors cursor-pointer">Privacy</p>
                        <p className="hover:text-white transition-colors cursor-pointer">Terms</p>
                        <p className="hover:text-white transition-colors cursor-pointer">Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
