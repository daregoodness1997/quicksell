// @types.products.ts
export interface Product {
  id: string;
  name: string;
  refs: string;
  keys: string;
  desc?: string;
  discount?: boolean;
  discAmount?: string | number;
  disabled?: boolean;
}
export type ProductContextType = {
  products: Product[];
  youGive: Product[];
  youGet: Product[];
  saveProduct: (todo: Product) => void;
  updateProduct?: (id: string) => void;
  deleteProduct?: (id: string) => void;
  addToGive: (id: string) => void;
  addToGet: (id: string) => void;
  [name: string]: string | any;
};
