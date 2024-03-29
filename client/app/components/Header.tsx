'use client'

import { useCartStore } from '@/store/cart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const { countCart: count } = useCartStore()

    return (
        <header className="sticky pt-6 px-2 left-0 right-0 top-0 bg-white flex flex-wrap flex-col md:justify-start md:flex-nowrap text-sm z-40">
            <div className="relative w-full bg-white border border-gray-200 rounded-[36px] py-3 px-6 md:flex md:items-center md:justify-between md:py-0" aria-label="Global">
                <div className="flex items-center justify-center gap-3 w-full">
                    <Image className='aspect-square object-contain rounded-[50%] border border-gray-200' width={40} height={40} src="/teddiehouse.jpg" alt="" />
                    <a className="w-fit md:mr-auto text-xl font-[500] flex flex-row justify-start items-center flex-1" href="#" aria-label="Brand">
                        <h1 className='tracking-widest'>
                            <span className='text-[#ca8360]'>TEDDIE</span>&nbsp;
                            <span className='text-[#735a32]'>HOUSE</span>
                        </h1>
                    </a>
                    <Link href='/cart'
                        className="text-none w-6 h-6 ml-auto flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 relative">
                        <ShoppingCartIcon />
                        {
                            count() !== 0 && <span className='text-[0.5rem] leading-none line- text-white rounded-full bg-red-500 flex justify-center items-center p-1 absolute -top-2 -left-2 w-1 h-1 box-content'>{count()}</span>
                        }
                    </Link>

                </div>
            </div>
            
        </header>

/* <Image className='aspect-square object-contain rounded-[50%] border border-gray-200' width={40} height={40} src="/teddiehouse.jpg" alt="" />
<a className="w-fit md:mr-auto text-xl font-[500] flex flex-row justify-start items-center flex-1" href="#" aria-label="Brand">
    <h1 className='tracking-widest'>
        <span className='text-[#ca8360]'>TEDDIE</span>&nbsp;
        <span className='text-[#735a32]'>HOUSE</span>
    </h1>
</a> */
    );
};

export default Header;