import { Slider } from 'antd';
import { RangeSliderProps, SideBarProps } from '../../utils/interfaces';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useCallback, useContext } from 'react';

function RangeSlider({ setPriceRange, priceRange }: RangeSliderProps) {
  const onChange = useCallback(
    (value: number[]) => {
      setPriceRange(value as number & number[]);
    },
    [setPriceRange]
  );

  return (
    <div>
      <div className='flex justify-between mb-1 text-sm'>
        <h6>Range</h6>
        <div>
          <span>{`₾ ${priceRange[0]}`} - </span>
          <span>{`₾ ${priceRange[1]}`}</span>
        </div>
      </div>
      <Slider
        range
        step={10}
        min={0}
        max={500}
        value={priceRange}
        onChange={onChange}
      />
    </div>
  );
}

function SideBar({ categories, setPriceRange, priceRange }: SideBarProps) {
  const { selectedCategories, setSelectedCategories } =
    useContext(CategoriesContext);

  const onCategoryChange = useCallback(
    (category: string) => {
      setSelectedCategories((prevState: string[]): string[] => {
        if (!prevState.includes(category)) {
          return [...prevState, category];
        } else {
          return prevState.filter((item) => item !== category);
        }
      });
    },
    [setSelectedCategories]
  );

  return (
    <div className='w-full m-auto'>
      <div className=' flex flex-col items-start text-sm bg-[#F9FAFB] w-[225px] p-4'>
        <h1 className='font-medium text-sm mb-5'>PRICES</h1>
        <span className='mb-20'>
          <RangeSlider setPriceRange={setPriceRange} priceRange={priceRange} />
        </span>
        <h6 className='mb-5'>CATEGORIES</h6>
        {categories.map((category: string) => (
          <label key={category} className='flex items-center mb-2'>
            <input
              type='checkbox'
              className='mr-2'
              onChange={() => onCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
