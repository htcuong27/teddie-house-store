import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="grow shrink basis-0 h-16 justify-between items-center flex">
      <div className="h-16 flex-col justify-start items-start inline-flex">
        <div className="py-2 justify-start items-center gap-2.5 inline-flex">
          <div className="flex-col justify-center items-start inline-flex">
            <Image
              className="aspect-square object-contain rounded-[50%] border border-gray-200"
              width={40}
              height={40}
              src="/teddiehouse.jpg"
              alt=""
            />
          </div>
          <div className="w-12 h-12 p-1.5 flex-col justify-center items-center inline-flex">
            <Link
              className="w-fit md:mr-auto text-xl font-[500] flex flex-row justify-start items-center flex-1"
              href="/"
              aria-label="Brand"
            >
              <h1 className="tracking-widest text-white">
                <span>TEDDIE</span>&nbsp;
                <span>HOUSE</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
