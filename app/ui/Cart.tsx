'use client';
import { useCartStore } from '@/app/store/cart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Cart = () => {
  const { countCart: count } = useCartStore();
  const currentPath = usePathname();

  const activeCartIcon = classNames({
    'bg-red-400': currentPath.endsWith('cart'),
  });
  console.log(currentPath);

  return (
    // <div className='relative'>
    <>
      <Link
        href={`${currentPath.includes('cart') ? '/' : '/cart'}`}
        className=" relative group flex"
      >
        <ShoppingCartIcon
          className={`w-10 h-10 p-2 rounded-full label-checked:bg-red-400 ${activeCartIcon} bg-gray-900 group-hover:hover:bg-red-400 text-blue duration-300`}
        />
        {count() !== 0 && (
          <span className="text-gray-900 absolute top-0 right-0 bg-white h-4 leading-[1.2em] mr-[-0.875rem] min-w-[0.6875rem] text-center px-[0.3125rem] py-0 rounded-[2.75rem]">
            {count()}
          </span>
        )}
      </Link>
      {/* <div className="absolute top-6 z-10 hidden transition-[display] duration-500 group-hover:block w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
            <div data-popper-arrow></div>
            <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Sản phẩm mới thêm</h3>
            </div>
            <div className="px-3 py-2">
                <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>

        </div> */}
    </>
    // </div>
  );
};

export default Cart;
