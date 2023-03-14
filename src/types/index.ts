export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Cart {
  id: number;
  product: Product;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

export interface OrderDetail extends Product {
  quantity: number;
}
