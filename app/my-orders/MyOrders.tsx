"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { listMyOrders } from "../services/api";

export default function MyOrdersList({ email }: { email: string }) {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    async function fetchMyOrders() {
      if (!email) toast.error("Please login to view orders");

      const response = await listMyOrders(email);
      setMyOrders(response.data);
    }

    fetchMyOrders();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-2 text-left">
              Products
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Total Amount
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Payment Method
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Tracking ID
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {myOrders.length > 0 ? (
            myOrders.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">
                  <ul>
                    {item.suborders.map((s: any, ind: number) => {
                      return (
                        <li key={s.id}>
                          {ind + 1}.{s.product.name}({s.quantity})
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  NPR. {item.totalAmount}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.paymentMethod}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.trackingId}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
