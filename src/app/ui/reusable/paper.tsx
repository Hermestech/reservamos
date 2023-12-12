import React from 'react';

type PaperProps = {
    children: React.ReactNode;
};

const Paper = ({ children }:PaperProps) => {
  return <div className='font-sans font-bold leading-6 break-words rounded-sm border-l-4 border-b-4 border border-black shadow bg-background-white'>{children}</div>;
};

export default Paper;