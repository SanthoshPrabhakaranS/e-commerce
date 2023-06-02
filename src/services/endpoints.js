export const endpoints = {
    register: "/auth/register",
    login: "/auth/login",
    getAllProducts: "/shop/all-products",
    getProducts: (categoryId) => `/shop/products/${categoryId}`
}