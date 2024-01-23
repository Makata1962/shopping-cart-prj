import { API_URL } from '../utils/constants';

export async function getProducts() {
    try {
        const res = await fetch(`${API_URL}/products`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    return [];
}

export async function getDescProducts() {
    try {
        const res = await fetch(`${API_URL}/products?sort=desc`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    return [];
}

export async function getProduct(id: string) {
    try {
        const res = await fetch(`${API_URL}/products/${id}`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    return [];
}

export async function getCategories() {
    try {
        const res = await fetch(`${API_URL}/products/categories`);
        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    return [];
}

export async function userLogIn(username: string, password: string) {
    try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        const user = await res.json()

        return user;
    } catch (error) {
        console.log('Error while authenticating user:', error)
    }
}