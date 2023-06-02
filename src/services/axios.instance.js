import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://e-commerce-dinh.onrender.com",
});
