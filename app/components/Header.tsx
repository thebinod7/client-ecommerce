"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { APP } from "../constants/contants";
import { useAppStore } from "../store/app";
import { getCartItems } from "../store/local-storage";

export default function Header() {
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);

  useEffect(() => {
    const cartItems = getCartItems();
    setCartItems(cartItems);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">{APP.NAME}</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-4 md:space-x-8">
          <Link
            href="/admin"
            className="py-2 font-medium text-gray-900 hover:text-gray-600 md:py-0"
          >
            Admin
          </Link>
          <Link
            href="#"
            className="py-2 font-medium text-gray-900 hover:text-gray-600 md:py-0"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="py-2 font-medium text-gray-900 hover:text-gray-600 md:py-0"
          >
            Collections
          </Link>
          <Link
            href="#"
            className="py-2 font-medium text-gray-900 hover:text-gray-600 md:py-0"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center">
          <Link className="cursor-pointer" href="/cart">
            <button className="relative p-2 cursor-pointer">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
