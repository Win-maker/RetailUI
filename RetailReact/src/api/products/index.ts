import { useQuery,type UseQueryOptions,} from "@tanstack/react-query";

import axios from "axios";

import { ProductType } from "../../shared/types";

export const getAllProduct = {
    useQuery: () => {
      return useQuery({
        queryKey: ["AllProducts"],
        queryFn: async () => {
          try {
            const response = await axios.get('AllProducts');
            console.log("API Response:", response.data);
            if (!Array.isArray(response.data)) {
              throw new Error("Unexpected API response format. Expected an array.");
            }
            return response.data;
          } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Error while fetching products");
          }
        },
      });
    },
  };
  