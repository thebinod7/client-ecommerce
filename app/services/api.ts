import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addProduct = async (productDetails: any) => {
  return axios.post(`${API_URL}/products`, productDetails);
};
