import React from 'react';
const Homesectioncard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border boder-black'>
      <div className='h-[14rem] w-[11rem]'>
        <img className='object-cover object-top w-full h-full top' 
          src={product.imageUrl} alt=""/>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>
            {product.title}
        </p>
      </div>
    </div>
  );
};

export default Homesectioncard;
