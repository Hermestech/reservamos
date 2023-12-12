import React from 'react';

type PaperProps = {
    children: React.ReactNode;
};

const Paper = ({ children }:PaperProps) => {
  return <div className='font-sans font-bold leading-6 break-words rounded-sm border-l-2 border-b-2 border border-black shadow-md bg-custom-pink-strong h-20'>{children}</div>;
};

export default Paper;