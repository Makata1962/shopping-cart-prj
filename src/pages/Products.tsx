import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/apiProducts';
import ProductList from '../features/product/ProductList';
import SideBar from '../features/sidebar/SideBar';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';
import { CardProps } from '../utils/interfaces';
import { CategoriesContext } from '../context/CategoriesContext';

function Products() {
  const { selectedCategories } =
    useContext(CategoriesContext);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const products = useLoaderData() as  Array<CardProps>;

  const { isLoading, data, error } = useQuery({
    queryKey: ['product'],
    queryFn: getCategories,
  });
  const categories = [
    'Dress',
    'Jacket',
    'Trainers',
    'Glasses',
    ...(data || []),
  ];

  const filteredProducts = products.filter((product: CardProps) => {
    const isInSelectedCategory =
      selectedCategories?.length === 0 ||
      selectedCategories?.includes(product?.category || "");
      const isInPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return isInSelectedCategory && isInPriceRange;
  }) as CardProps[];

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <div className='flex justify-start'>
      <div className='w-[384px]'>
        <SideBar
          categories={categories}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
      <div className='w-[896px]'>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default Products;
