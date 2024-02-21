import React from 'react';

const HeaderMenu = () => {
  return (
    <div className="w-[367px] h-6 justify-end items-start gap-12 flex">
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal leading-normal">
          Home
        </div>
      </div>
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal leading-normal">
          Home
        </div>
      </div>
      <div className="flex-col justify-start items-center inline-flex">
        <div className="text-center text-black text-base font-normal leading-normal">
          About
        </div>
        <div className="w-12 relative opacity-50">
          <div className="w-12 left-0 top-0 absolute border border-black"></div>
        </div>
      </div>
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal leading-normal">
          Home
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
