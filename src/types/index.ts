export interface ProductInfo {
  name: string;
  price: number;
  description: string;
}

export interface Product extends ProductInfo {
  id: number;
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
