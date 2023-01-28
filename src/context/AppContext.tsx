import React, { createContext, useState } from 'react';
import { ProductContextType, Product } from '../types/@types.product';
import { tradeItems } from '../utils/data';

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(tradeItems);
  const [youGive, setYouGive] = useState<Product[]>([]);
  const [youGet, setYouGet] = useState<Product[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const saveProduct = (product: Product) => {
    const newProduct: Product = {
      ...product,
      id: `${Math.random()}`,
      disabled: false,
    };
    setProducts([...products, newProduct]);
  };
  const addToGive = (id: string) => {
    products.filter((product: Product) => {
      if (product.id === id) {
        setYouGive([...youGive, product]);
      }
    });
  };
  const addToGet = (id: string) => {
    products.filter((product: Product) => {
      if (product.id === id) {
        setYouGet([...youGet, product]);
      }
    });
  };

  const onLoggedIn = () => {
    setLoggedIn(true);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        saveProduct,
        addToGet,
        addToGive,
        youGive,
        youGet,
        onLoggedIn,
        loggedIn,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// https://blog.logrocket.com/how-to-use-react-context-typescript/
