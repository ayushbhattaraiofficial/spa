"use client";

import { useState } from "react";
import { ProductTable } from "../components/ProductTable";
import { OrderList } from "../components/OrderList";
import { useOrder } from "../hooks/useOrder";
import { Product } from "../types/product";

const initialProducts: Product[] = [
  { id: 1, name: "Bing", price: 100 },
  { id: 2, name: "Biscuit", price: 100 },
  { id: 3, name: "Chocolate", price: 50 },
  { id: 4, name: "Coffee", price: 75 },
];

export default function Home() {
  const [products] = useState<Product[]>(initialProducts);
  const {
    orderItems,
    addToOrder,
    updateQuantity,
    removeFromOrder,
    totalAmount,
  } = useOrder();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Order SPA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <ProductTable products={products} onAddToOrder={addToOrder} />
        </div>
        <div>
          <OrderList
            items={orderItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromOrder}
            totalAmount={totalAmount}
          />
        </div>
      </div>
    </main>
  );
}
