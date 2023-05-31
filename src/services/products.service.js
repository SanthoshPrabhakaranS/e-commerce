import { ApiInstance } from "./axios.instance";
import { endpoints } from "./endpoints";

export default class ProductService {
  async getAllProducts() {
    const response = await ApiInstance.get(endpoints.getAllProducts);
    return response.data;
  }

  async getProducts(categoryId) {
    const response = await ApiInstance.get(endpoints.getProducts(categoryId));
    return response.data;
  }
}
