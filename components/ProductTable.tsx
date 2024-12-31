import { Product } from "../types/product";

interface ProductTableProps {
  products: Product[];
  onAddToOrder: (product: Product) => void;
}

export function ProductTable({ products, onAddToOrder }: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-300">S.N</th>
            <th className="px-4 py-2 border border-gray-300">Product Name</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{product.id}</td>
              <td className="px-4 py-2 border border-gray-300">
                {product.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  onClick={() => onAddToOrder(product)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
