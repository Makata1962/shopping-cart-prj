import DisplayProducts from '../ui/common/DisplayProducts';
import Spinner from '../ui/common/Spinner';
import Error from '../ui/common/Error';
import { useQuery } from '@tanstack/react-query';
import { getDescProducts, getProducts } from '../services/apiProducts';
import { useState } from 'react';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';

function Products() {
  const [isDesc, setIsDesc] = useState(false);

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: isDesc ? ['productsDesc'] : ['products'],
    queryFn: isDesc ? getDescProducts : getProducts,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  return (
    <div className='flex flex-col'>
      <span className='self-end'>
        <SortAscendingOutlined
          onClick={() => setIsDesc(false)}
          className={`mr-3 p-2 rounded ${isDesc ? '' : 'bg-gray-400'}`}
        />
        <SortDescendingOutlined
          onClick={() => setIsDesc(true)}
          className={`mr-3 p-2 rounded ${isDesc ? 'bg-gray-400' : ''}`}
        />
      </span>
      <DisplayProducts products={products} />
    </div>
  );
}

export default Products;
