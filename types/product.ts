export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface OrderItem extends Product {
  quantity: number;
}
