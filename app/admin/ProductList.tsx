"use client";

interface Item {
  id: string;
  name: string;
  email: string;
  status: string;
}

export default function ProductList() {
  // Sample data - replace with your own data
  const items: Item[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Pending",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Inactive",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 font-medium">
                {item.name}
              </td>
              <td className="border border-gray-200 px-4 py-2">{item.email}</td>
              <td className="border border-gray-200 px-4 py-2">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
