import { OrderItem } from "../types/product";

interface OrderListProps {
  items: OrderItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  totalAmount: number;
}

export function OrderList({
  items,
  onUpdateQuantity,
  onRemoveItem,
  totalAmount,
}: OrderListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Product Name</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Quantity</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border border-gray-300">
                <td className="px-4 py-2 border border-gray-300">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      onUpdateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xl font-bold">
        Total Amount: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
}
