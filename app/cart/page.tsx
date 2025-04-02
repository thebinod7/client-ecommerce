"use client";

import Link from "next/link";
import { useAppStore } from "../store/app";
import { saveCartItems } from "../store/local-storage";
import CheckoutBox from "./CheckoutBox";

export default function ShoppingCart() {
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);

  const updateQuantity = (uuid: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const found = cartItems.find((item) => item.uuid === uuid);
    const updated = { ...found, quantity: newQuantity };
    setCartItems(
      cartItems.map((item) => (item.uuid === uuid ? updated : item))
    );
  };

  const removeItem = (uuid: string) => {
    const filtered = cartItems.filter((item) => item.uuid !== uuid);
    setCartItems(filtered);
    saveCartItems(filtered);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center py-10">
          <p className="text-gray-500 mb-10">Your cart is empty</p>
          <Link
            className="mt-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            href={"/"}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = calculateSubtotal();
  const tax = Math.floor(subtotal * 0.07);
  const total = subtotal + tax;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <tr key={item.uuid}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                          onClick={() =>
                            updateQuantity(item.uuid, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.uuid,
                              Number.parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 h-8 text-center border border-gray-300 rounded-md"
                        />
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                          onClick={() =>
                            updateQuantity(item.uuid, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      NPR {item.unitPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      NPR {item.unitPrice * item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeItem(item.uuid)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CheckoutBox subtotal={subtotal} tax={tax} total={total} />
      </div>
    </div>
  );
}
