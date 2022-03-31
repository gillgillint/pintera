import React from 'react';
import { BsCameraFill } from 'react-icons/bs';

function Logo({ className }) {
  return (
    <div className={` flex items-end  gap-2 ${className}`}>
      <BsCameraFill fontSize={34} />
      <div className='logo-text text-xl'>Pintera</div>
    </div>
  );
}

export default Logo;
