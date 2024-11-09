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
