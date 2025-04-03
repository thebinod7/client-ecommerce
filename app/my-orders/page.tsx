"use client";
import CurrentUser from "../components/CurrentUser";
import { useAppStore } from "../store/app";
import MyOrdersList from "./MyOrders";

export default function page() {
  const currentUser = useAppStore((state) => state.loggedInUser);

  return (
    <div className="mt-5 mb-10 p-6">
      <CurrentUser />
      <div className="flex items-center justify-between gap-8">
        <h2 className="text-2xl font-bold">My Order List </h2>
      </div>
      <div className="mt-5">
        {currentUser ? (
          <MyOrdersList email={currentUser.email} />
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500">
              Please login to view orders!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
