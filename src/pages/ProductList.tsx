import { useLoaderData } from 'react-router-dom';

function ProductList() {
  const products = useLoaderData();
  console.log('products', products);

  return <div>ProductList</div>;
}



export default ProductList;
