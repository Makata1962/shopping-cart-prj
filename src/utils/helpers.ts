import { getProducts } from '../services/apiProducts';

export async function loader() {
    const products = await getProducts();
    return products;
}