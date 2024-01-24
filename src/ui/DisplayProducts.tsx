import { useContext, useState } from 'react';
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
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Button from './Button';
import { PAGINATION_CHUNK_SIZE } from '../utils/constants';

function DisplayProducts({ products }: ProductsProps) {
  const { selectedCategories } = useContext(CategoriesContext);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [page, setPage] = useState(1);

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

  const totalPages = Math.ceil((products?.length || 0) / PAGINATION_CHUNK_SIZE);

  const endIndex = page * PAGINATION_CHUNK_SIZE;
  const startIndex = endIndex - PAGINATION_CHUNK_SIZE;
  const currentPageProducts = products?.slice(startIndex, endIndex);

  const filteredProductsQuery = useQuery({
    queryKey: ['filteredProducts', selectedCategories],
    queryFn: () => getFilteredByCategories(selectedCategories),
    enabled: !!selectedCategories.length,
  });

  const { data: filteredByCategoryNames, error: isFilteredError } =
    filteredProductsQuery;

  const filteredProducts = (
    filteredByCategoryNames ? filteredByCategoryNames : currentPageProducts
  ).filter(
    (product: CardProps) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  ) as CardProps[];

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const isLastPage = page >= totalPages;

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
        <ProductList products={[...filteredProducts]} />
        <nav className='flex justify-end items-center self-end w-40 my-20'>
          <button
            disabled={page === 1}
            className={
              page === 1
                ? 'bg-gray-200 px-1 rounded mx-2 focus:cursor-pointer'
                : ''
            }
            onClick={prevPage}
          >
            <LeftOutlined />
          </button>
          <button
            className={
              page - 1 === 0
                ? 'hidden'
                : 'px-2 rounded border mx-2 focus:cursor-pointer'
            }
            onClick={prevPage}
          >
            {page - 1}
          </button>
          <button className='border border-[#374151] px-2 rounded mx-2 focus:cursor-pointer'>
            {page}
          </button>
          <button
            className={`border px-2 rounded mx-2 focus:cursor-pointer ${
              isLastPage ? 'hidden' : ''
            }`}
            onClick={nextPage}
            disabled={isLastPage}
          >
            {page + 1}
          </button>
          <button
            className={`border px-1 rounded mx-2 focus:cursor-pointer ${
              isLastPage ? 'bg-gray-200' : ''
            }`}
            onClick={nextPage}
            disabled={isLastPage}
          >
            <RightOutlined />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default DisplayProducts;
