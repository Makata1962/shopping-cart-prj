import { PaginationProps } from '../../utils/interfaces';
import Button from '../Button';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function Pagination({
  page,
  nextPage,
  prevPage,
  isLastPage,
}: PaginationProps ) {
  return (
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
      <Button className='border border-stormy-blue px-2 rounded mx-2 focus:cursor-pointer'>
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
  );
}

export default Pagination;
