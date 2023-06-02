import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://e-commerce-l0k8.onrender.com",
});
