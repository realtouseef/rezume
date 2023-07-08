import React from 'react';

type HeadingProps = { title: string };

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className='flex items-center space-x-3'>
      <h5 className='text-blue-600 font-semibold'>{title}</h5>
      <div className='w-full h-[.5px] bg-gray-400' />
    </div>
  );
};

export default Heading;
