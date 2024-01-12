import Image from 'next/image';
import React, { useRef } from 'react';

const Header = () => {

    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="mt-6 relative w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-6 md:flex md:items-center md:justify-between md:py-0" aria-label="Global">
                <div className="flex items-center justify-center gap-3 w-full">
                    <Image className='aspect-square object-contain rounded-[50%] border border-gray-200' width={40} height={40} src="/teddiehouse.jpg" alt="" />
                    <a className="w-fit md:mr-auto text-xl font-semibold flex flex-row justify-start items-center flex-1" href="#" aria-label="Brand">
                        <h1 className='tracking-widest'>
                            <span className='text-[#ca8360]'>TEDDIE</span>&nbsp;
                            <span className='text-[#735a32]'>HOUSE</span>
                        </h1>
                    </a>
                    <a className="ml-auto flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M289.417-105.77q-28.14 0-47.874-19.702t-19.734-47.842q0-28.141 19.701-47.875 19.702-19.734 47.843-19.734 28.14 0 47.874 19.702 19.734 19.701 19.734 47.842t-19.701 47.875q-19.702 19.734-47.843 19.734Zm380.423 0q-28.141 0-47.875-19.702t-19.734-47.842q0-28.141 19.702-47.875 19.701-19.734 47.842-19.734t47.875 19.702q19.734 19.701 19.734 47.842t-19.702 47.875Q697.98-105.77 669.84-105.77ZM242.23-729.193l101.385 212.309h268.654q3.462 0 6.154-1.731 2.693-1.731 4.616-4.808l107.307-195q2.308-4.231.385-7.501-1.923-3.269-6.539-3.269H242.23Zm-27.048-55.96h544.47q24.346 0 36.519 20.415 12.173 20.416.981 41.508L672.23-496.732q-9.039 16.808-25.101 26.308-16.063 9.5-34.514 9.5h-287L278.5-374.693q-3.077 4.615-.193 10 2.885 5.386 8.655 5.386h450.422v55.96H289.532q-39.077 0-58.669-33.072-19.593-33.071-1.4-66.274l57.077-101.631-143.829-303.254H68.078v-55.96h109.807l37.297 78.385Zm128.433 268.269h275.962-275.962Z" /></svg>
                        Giỏ Hàng
                    </a>

                </div>
            </nav>
        </header>
    );
};

export default Header;