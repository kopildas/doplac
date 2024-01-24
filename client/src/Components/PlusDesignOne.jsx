import React from 'react';

export default function PlusDesignOne({ onClick }) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='h-5 border-l border-line2 w-0'></div>
      <div onClick={onClick} className='w-[50px] h-[36px] border border-plus-border rounded-md flex items-center justify-center text-custom-blue text-xl cursor-pointer'>+</div>
      <div className='h-5 border-l border-line2 w-0'></div>
    </div>
  );
}
