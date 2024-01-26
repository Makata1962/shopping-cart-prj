import ProductListForDetails from '../features/product/SimilarProducts';
import ProductDetails from '../features/product/ProductDetails';

function IndividualProduct() {
  return (
    <div className='max-w-[1280px]'>
      <ProductDetails />
      <ProductListForDetails />
    </div>
  );
}

export default IndividualProduct;
