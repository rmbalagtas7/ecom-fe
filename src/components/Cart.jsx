import React from "react";
import { useState } from "react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

const Cart = ({ count = 0, cart }) => {

  return (
    <>
      <div className="ml-4 flow-root lg:ml-6">
        {/* Remove <a> and replace with div */}
        <Popover className="relative">
          {/* Popover Button (Cart Icon & Count) */}
          <PopoverButton className="group flex items-center p-2 cursor-pointer">
            <ShoppingBagIcon
              aria-hidden="true"
              className="size-6 shrink-0 text-gray-400 group-hover:text-yellow-600 transition"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-yellow-800">
              {count}
            </span>
          </PopoverButton>

          {/* Popover Panel (Cart Dropdown) */}
          <PopoverPanel className="absolute right-0 mt-2 w-72 max-w-xs bg-white rounded-lg shadow-lg border border-gray-200 z-10 md:w-96">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Shopping Cart
              </h2>

              {/* Cart Items List */}
              {cart.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-14 h-14 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.color}</p>
                      </div>
                      <button className="text-gray-400 hover:text-red-600">
                        <XMarkIcon className="size-5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              )}

              {/* Buttons (Checkout & View Bag) */}
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] mt-4 hover:from-[#b8860b] hover:to-[#d4af37] text-white py-2 rounded-md">
                  Checkout
                </button>

                <Link to="/my-cart" className="block text-center text-indigo-500 mt-2 text-sm hover:underline">
                    View Shopping Bag
                </Link>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </>
  );
};

export default Cart;
