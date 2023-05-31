export const endpoints = {
    register: "/api/auth/register",
    login: "/api/auth/login",
    getAllProducts: "/api/all-products",
    getProducts: (categoryId) => `/api/products/${categoryId}`
}