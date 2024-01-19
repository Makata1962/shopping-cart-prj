const API_URL = "https://fakestoreapi.com/";

export async function getProducts() {
    const res = await fetch(`${API_URL}/products`);

    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) throw Error("Failed getting Products");

    const { data } = await res.json();
    return data;
}

export async function getProduct(id: number) {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw Error(`Couldn't find product #${id}`);

    const { data } = await res.json();
    return data;
}

