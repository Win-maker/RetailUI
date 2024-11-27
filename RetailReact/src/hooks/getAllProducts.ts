import api from "../api";
export const useProducts = () => {

    const { data: products = [], isError, isLoading } = api.products.getAllProduct.useQuery();
  
    return { products, isError, isLoading };
  };