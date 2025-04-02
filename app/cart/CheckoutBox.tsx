import React from "react";

interface CheckoutBoxProps {
  subtotal?: number;
  tax?: number;
  total?: number;
  handleCheckoutClick: () => void;
}

export default function CheckoutBox({
  subtotal = 0,
  tax = 0,
  total = 0,
  handleCheckoutClick,
}: CheckoutBoxProps) {
  return (
    <div>
      <div className="border rounded-lg p-6 bg-gray-50">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{tax}</span>
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>NPR {total}</span>
            </div>
          </div>
        </div>
        <button
          className="w-full cursor-pointer mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={handleCheckoutClick}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
