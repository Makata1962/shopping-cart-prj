import { Slider } from 'antd';
import React, { useState } from 'react';

function RangeSlider() {
  const [value, setValue] = useState([120, 300]); // Initialize state with default range

  const onChange = (newValue: number | number[]) => {
    console.log('onChange: ', newValue);
    setValue(newValue as number[]);
  };

  return (
    <div>
      <div className='flex justify-between mb-1'>
        <span>Range</span>
        <div>
          <span>{`₾ ${value[0]}`} - </span>
          <span>{`₾ ${value[1]}`}</span>
        </div>
      </div>
      <Slider
        range
        step={10}
        min={120}
        max={300}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function SideBar() {
  return (
    <div className='w-full m-auto'>
      <div className='bg-[#F9FAFB] w-[225px] p-4'>
        <h1 className='text-lg font-semibold'>PRICES</h1>
        <RangeSlider />
      </div>
    </div>
  );
}

export default SideBar;
