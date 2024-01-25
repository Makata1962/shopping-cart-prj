import { useContext, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  getCategories,
  getFilteredByCategories,
} from '../services/apiProducts';
import ProductList from '../features/product/ProductList';
import SideBar from '../features/sidebar/SideBar';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';
import { CardProps, ProductsProps } from '../utils/interfaces';
import { CategoriesContext } from '../context/CategoriesContext';
import { PAGINATION_CHUNK_SIZE } from '../utils/constants';
import Pagination from '../ui/common/Pagination';
import usePagination from '../hooks/usePagination';

function DisplayProducts({ products }: ProductsProps) {
  const { selectedCategories } = useContext(CategoriesContext);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);

  const { isLoading, data, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  const categories = [
    'Dress',
    'Jacket',
    'Trainers',
    'Glasses',
    ...(data || []),
  ];

  const filteredProductsQuery = useQuery({
    queryKey: ['filteredProducts', selectedCategories],
    queryFn: () => getFilteredByCategories(selectedCategories),
    enabled: !!selectedCategories.length,
  });

  const { data: filteredByCategoryNames, error: isFilteredError } =
    filteredProductsQuery;

  const filteredProducts = useMemo(
    () =>
      (filteredByCategoryNames ? filteredByCategoryNames : products).filter(
        (product: CardProps) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      ),
    [products, filteredByCategoryNames, priceRange]
  ) as CardProps[];

  const { page, nextPage, prevPage, isLastPage, startIndex, endIndex } =
    usePagination(filteredProducts.length, PAGINATION_CHUNK_SIZE);

  const currentPageProducts = filteredProducts?.slice(startIndex, endIndex);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;
  if (isFilteredError) return <Error message={error as string} />;

  return (
    <div className='flex justify-start'>
      <div className='w-[384px]'>
        <SideBar
          categories={categories}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
      <div className='w-[896px] flex flex-col'>
        <ProductList products={[...currentPageProducts]} />
        <Pagination
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          isLastPage={isLastPage}
        />
      </div>
    </div>
  );
}

export default DisplayProducts;
