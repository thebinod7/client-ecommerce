"use client";

import { useEffect, useState } from "react";
import { listOrders, updateOrder } from "../services/api";
import { ORDER_STATUS } from "../constants/contants";
import { toast } from "sonner";

export default function OrderList() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await listOrders();
      setOrderList(response.data);
    }

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderUid: string, status: string) => {
    try {
      await updateOrder(orderUid, { status });
      toast.success("Order status updated successfully");
      const response = await listOrders();
      setOrderList(response.data);
    } catch (err) {
      toast.error("Error updating order status");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-2 text-left">
              Products
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Customer Name / Contact
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Order Date
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Shipping Address
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Total Amount
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList.length > 0 ? (
            orderList.map((item: any) => (
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
                  {item.orderedBy.name} / {item.orderedBy.contactNumber}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.shippingAddress}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  NPR. {item.totalAmount}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateOrderStatus(item.uuid, e.target.value)
                    }
                    className="block w-full mt-2 px-5 py-2 border border-gray-300 rounded-md outline-none"
                    name="paymentMethod"
                    required
                  >
                    <option value={ORDER_STATUS.ORDERED}>
                      {ORDER_STATUS.ORDERED}
                    </option>
                    <option value={ORDER_STATUS.PROCESSING}>
                      {ORDER_STATUS.PROCESSING}
                    </option>
                    <option value={ORDER_STATUS.SHIPPED}>
                      {ORDER_STATUS.SHIPPED}
                    </option>
                    <option value={ORDER_STATUS.DELIVERED}>
                      {ORDER_STATUS.DELIVERED}
                    </option>
                    <option value={ORDER_STATUS.CANCELLED}>
                      {ORDER_STATUS.CANCELLED}
                    </option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
