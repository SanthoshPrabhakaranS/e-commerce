import { ApiInstance } from "./axios.instance";
import { endpoints } from "./endpoints";

export default class AuthService {
    async register(user) {
        const response = await ApiInstance.post(endpoints.register, user)
        return response.data
    }

    async login(user) {
        const response = await ApiInstance.post(endpoints.login, user)
        return response.data
    }
}