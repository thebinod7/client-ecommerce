import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAppStats = async () => {
  return axios.get(`${API_URL}/app/stats`);
};

export const listMyOrders = async (email: string) => {
  const params = new URLSearchParams();
  params.append("email", email);
  return axios.get(`${API_URL}/orders/me`, { params });
};

export const addProduct = async (productDetails: any) => {
  return axios.post(`${API_URL}/products`, productDetails);
};

export const listProducts = async () => {
  return axios.get(`${API_URL}/products`);
};

export const createOrder = async (payload: any) => {
  return axios.post(`${API_URL}/orders`, payload);
};

export const listOrders = async () => {
  return axios.get(`${API_URL}/orders`);
};

export const updateOrder = async (uuid: string, payload: any) => {
  return axios.patch(`${API_URL}/orders/${uuid}`, payload);
};
