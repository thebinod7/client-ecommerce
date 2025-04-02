import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-bold">Dashboard Overview</h2>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Total Users Card */}
        <div className="flex flex-1 flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              Total Users
            </span>
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Users size={20} />
            </div>
          </div>
          <div className="flex items-baseline space-x-1">
            <h3 className="text-3xl font-bold">24,521</h3>
            <span className="text-xs">users</span>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="flex flex-1 flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              Total Orders
            </span>
            <div className="rounded-full bg-purple-100 p-2 text-purple-600">
              <ShoppingBag size={20} />
            </div>
          </div>
          <div className="flex items-baseline space-x-1">
            <h3 className="text-3xl font-bold">1,843</h3>
            <span className="text-xs">orders</span>
          </div>
        </div>

        {/* Total Sales Card */}
        <div className="flex flex-1 flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              Total Sales
            </span>
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="flex items-baseline space-x-1">
            <h3 className="text-3xl font-bold">$89,421</h3>
            <span className="text-xs">revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
