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

  const filteredProductsQuery = useQuery({
    queryKey: ['filteredProducts', selectedCategories],
    queryFn: () => getFilteredByCategories(selectedCategories),
    enabled: !!selectedCategories.length,
  });

  const { data: filteredByCategoryNames, error: isFilteredError } =
    filteredProductsQuery;

  const filteredProducts = (
    filteredByCategoryNames ? filteredByCategoryNames : products
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

  const endIndex = page * PAGINATION_CHUNK_SIZE;
  const startIndex = endIndex - PAGINATION_CHUNK_SIZE;
  const currentPageProducts = filteredProducts?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    (filteredProducts?.length || 0) / PAGINATION_CHUNK_SIZE
  );
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
        <ProductList products={[...currentPageProducts]} />
        <nav className='flex justify-end items-center self-end w-40 my-20'>
          <Button
            disabled={page === 1}
            className={`border px-1 rounded mx-2 focus:cursor-pointer ${
              page === 1 ? 'bg-gray-200' : ''
            }`}
            onClick={prevPage}
          >
            <LeftOutlined />
          </Button>
          <Button
            className={
              page - 1 === 0
                ? 'hidden'
                : 'px-2 rounded border mx-2 focus:cursor-pointer'
            }
            onClick={prevPage}
          >
            {page - 1}
          </Button>
          <Button className='border border-[#374151] px-2 rounded mx-2 focus:cursor-pointer'>
            {page}
          </Button>
          <Button
            className={`border px-2 rounded mx-2 focus:cursor-pointer ${
              isLastPage ? 'hidden' : ''
            }`}
            onClick={nextPage}
            disabled={isLastPage}
          >
            {page + 1}
          </Button>
          <Button
            className={`border px-1 rounded mx-2 focus:cursor-pointer ${
              isLastPage ? 'bg-gray-200' : ''
            }`}
            onClick={nextPage}
            disabled={isLastPage}
          >
            <RightOutlined />
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default DisplayProducts;
