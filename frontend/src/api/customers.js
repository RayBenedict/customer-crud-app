import axios from "axios";

const API_URL = "http://localhost/api/customers"; // Update if needed

export const getCustomers = async () => axios.get(API_URL);
export const getCustomer = async (id) => axios.get(`${API_URL}/${id}`);
export const createCustomer = async (data) => axios.post(API_URL, data);
export const updateCustomer = async (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = async (id) => axios.delete(`${API_URL}/${id}`);
