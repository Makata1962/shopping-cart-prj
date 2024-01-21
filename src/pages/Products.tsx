import ProductList from '../features/product/ProductList';
import SideBar from '../features/sidebar/SideBar';

function Products() {
  return (
    <div className='flex justify-between'>
      <div className='w-1/3'>
        <SideBar />
      </div>
      <div className='w-2/3'>
        <ProductList />
      </div>
    </div>
  );
}

export default Products;
