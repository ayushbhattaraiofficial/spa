import { useState, useCallback } from "react";
import { Product, OrderItem } from "@/types/product";

export function useOrder() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addToOrder = useCallback((product: Product) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const removeFromOrder = useCallback((id: number) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    orderItems,
    addToOrder,
    updateQuantity,
    removeFromOrder,
    totalAmount,
  };
}
