import React, { createContext, useState, useEffect } from 'react';
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
  const [givecalculate, setGiveCalculate] = useState({});
  const [getcalculate, setGetCalculate] = useState({});

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

  const calculateRefKeys = (data: Product[]) => {
    let refs = 0;
    let keys = 0;
    for (let element of data) {
      refs = refs + Number(element?.refs);
      keys = keys + Number(element?.keys);
    }

    return { refs, keys };
  };

  const clearGet = () => {
    setYouGet([]);
  };
  const clearGive = () => {
    setYouGive([]);
  };

  useEffect(() => {
    setGiveCalculate(calculateRefKeys(youGive));
    setGetCalculate(calculateRefKeys(youGet));
  }, [youGive, youGet]);

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
        givecalculate,
        getcalculate,
        clearGet,
        clearGive,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// https://blog.logrocket.com/how-to-use-react-context-typescript/
