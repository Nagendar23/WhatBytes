"use client";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="px-8 py-6 max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 text-lg mb-8">Looks like you haven't added any products yet</p>
            <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-8 py-6 max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft size={20} />
          Back to Products
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-6 p-6 ${index !== items.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">${item.price}</p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 rounded-md transition-colors font-bold text-lg border border-blue-300"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-bold text-gray-800 text-lg">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 rounded-md transition-colors font-bold text-lg border border-blue-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-500 text-sm mb-4">Subtotal</p>
                    <p className="text-lg font-bold text-gray-800 mb-4">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span className="font-semibold">${(subtotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-bold text-blue-600">${(subtotal * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Proceed to Checkout
              </button>

              <Link href="/" className="block text-center text-blue-600 hover:text-blue-700 mt-4 font-medium">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
