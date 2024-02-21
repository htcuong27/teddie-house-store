import { XMarkIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const Header2 = ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky z-50 top-0 flex items-center text-neutral-800 text-center text-lg font-semibold whitespace-nowrap border-b-[color:var(--greyscale-Grey-95,#F0F2F5)] bg-white px-4 py-4 border-b border-solid">
      <Link href="/" className="w-6 h-6">
        <XMarkIcon />
      </Link>
      <span className="flex-1">{children}</span>
    </div>
  );
};

export default Header2;
