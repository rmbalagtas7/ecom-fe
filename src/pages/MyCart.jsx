import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MyCart = ({ cartList }) => {
    
  const subTotal = cartList.reduce((acc, product) => {
    const price = parseInt(product.price.replace(/[^\d]/g, ""), 10); // Remove ₱ and commas
    return acc + price;
  }, 0);

  const total = (subTotal + 500).toLocaleString(); // Add shipping before formatting

  const formattedSubTotal = subTotal.toLocaleString();

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Shopping Cart Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="md:col-span-2 space-y-6">
          {cartList.length > 0 ? (
            cartList.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex items-center justify-between border-b pb-4 border-gray-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">{product.color}</p>
                    <p className="text-gray-900 font-semibold">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="border rounded-md p-1 border-gray-500">
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                  <button className="cursor-pointer">
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-gray-600 group-hover:text-yellow-600"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>{formattedSubTotal}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Shipping estimate</p>
              <p>₱500</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-gray-900">
              <p>Order total</p>
              <p>₱{total}</p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white py-2 mt-4 rounded-md hover:from-[#b8860b] hover:to-[#d4af37]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
