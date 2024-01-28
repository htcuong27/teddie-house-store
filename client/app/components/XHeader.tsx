import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const XHeader = () => {
    return (
        <div className="w-full h-32 pl-16 pr-12 py-7 bg-white justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-16 justify-between items-center flex">
                <div className="h-16 flex-col justify-start items-start inline-flex">
                    <div className="py-2 justify-start items-center gap-2.5 inline-flex">
                        <div className="flex-col justify-center items-start inline-flex">
                            <div className="flex-col justify-center items-start flex">
                                <div className="text-center text-black text-2xl font-medium font-['Inter'] leading-7">LOGO</div>
                            </div>
                        </div>
                        <div className="w-12 h-12 p-1.5 flex-col justify-center items-center inline-flex">
                            <div className="h-9"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center flex">
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="p-[18px] rounded-[36px] justify-center items-center inline-flex">
                        <div className="pl-[9.62px] pr-[9.42px] py-2.5 justify-center items-center flex">
                            <div className="opacity-50 flex-col justify-center items-start inline-flex">
                                <div className="self-stretch flex-col justify-start items-center flex">
                                    <div className="text-center text-stone-950 text-base font-medium font-['Inter'] leading-none">Store</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2.5 justify-center items-center flex">
                            <div className="opacity-50 flex-col justify-center items-start inline-flex">
                                <div className="self-stretch flex-col justify-start items-center flex">
                                    <div className="text-center text-stone-950 text-base font-medium font-['Inter'] leading-none">About</div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-[9.85px] pr-[9.65px] py-2.5 justify-center items-center flex">
                            <div className="opacity-50 flex-col justify-center items-start inline-flex">
                                <div className="self-stretch flex-col justify-start items-center flex">
                                    <div className="text-center text-stone-950 text-[15.12px] font-medium font-['Inter'] leading-none">Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-[9.63px] pr-[9.43px] py-2.5 justify-center items-center flex">
                            <div className="opacity-50 flex-col justify-center items-start inline-flex">
                                <div className="self-stretch flex-col justify-start items-center flex">
                                    <div className="text-center text-stone-950 text-base font-medium font-['Inter'] leading-none">Contact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-full border-2 border-dark-color w-60 max-w-60 flex flex-row justify-between p-2 px-4 relative'>
                    <input type="text" id="searchBar" placeholder='Search' className='outline-none gap-2' />
                    <button className='px-4 absolute top-0 bottom-0 right-0 border-l-2 bg-background-color last:rounded-tr-full last:rounded-br-full'>
                        <div className='w-4 h-4 text-font-color '>
                            <MagnifyingGlassIcon />
                        </div>  
                    </button>
                </div>
            </div>
        </div>
    );
};

export default XHeader;