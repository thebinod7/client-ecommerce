import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addProduct = async (productDetails: any) => {
  return axios.post(`${API_URL}/products`, productDetails);
};

export const listProducts = async () => {
  return axios.get(`${API_URL}/products`);
};

export const createOrder = async (payload: any) => {
  return axios.post(`${API_URL}/orders`, payload);
};
