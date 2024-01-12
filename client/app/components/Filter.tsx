'use client';
import { Transition } from '@headlessui/react';
import { useLayoutEffect, useState } from 'react';
import FilterIcon from '../svgs/FilterIcon';

const Filter = () => {
    const [isShow, setIsShow] = useState(false);

    useLayoutEffect(() => {
        isShow
            ? (
                document.body.style.overflow = 'hidden'
            )
            : (
                document.body.style.overflow = 'auto');
    }, [isShow]);


    return (
        <>
            <button
                className="flex flex-row rounded-3xl border p-2 w-fit gap-2 text-sm items-center"
                onClick={() => setIsShow(true)}
            >
                <FilterIcon />
                <span>Phân Loại</span>
            </button>
            <Transition
                as='button'
                className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 z-10'
                show={isShow}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                onClick={() => setIsShow(false)}
            ></Transition>
            <Transition
                className='fixed top-0 left-0 bottom-0 flex flex-col gap-2 w-[320px] z-50 h-100vh bg-white shadow-md pt-6 px-2'
                show={isShow}
                enter="transition ease-in-out duration-400 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-400 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <h2 className='uppercase tracking-wide'>
                    Tuỳ Chỉnh
                </h2>
                <div className='flex flex-row flex-wrap gap-2'>
                    <button className='border bg-gray-200 py-1 px-2 rounded-lg'>Charm</button>
                    <button className='border bg-gray-200 py-1 px-2 rounded-lg'>Keychain</button>
                </div>
            </Transition>
        </>
    );
};

export default Filter;