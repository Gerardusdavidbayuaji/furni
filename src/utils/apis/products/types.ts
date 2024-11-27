export interface ProductAttributes {
  title: string;
  company: string;
  description: string;
  featured: true;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  image: string;
  price: string;
  shipping: string;
  colors: string[];
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaData {
  pagination: Pagination;
  categories: string[];
  companies: string[];
}

export interface IProducts {
  data: Product[];
  meta: MetaData;
}

export interface CartItem {
  id: number;
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  amount: number;
  quantity: number;
  productColor: string | null;
  company: string;
}

export interface CartState {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}
