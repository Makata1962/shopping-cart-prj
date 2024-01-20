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

export async function getProduct(id: number) {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw Error(`Couldn't find product #${id}`);

    const { data } = await res.json();
    return data;
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