import React, { ChangeEvent } from 'react';
import ButtonWithIcon from '../ButtonWithIcon';
import CloseIcon from '@/app/svgs/CloseIcon';
import { Charm } from '@/app/interface/Charm';
import classNames from 'classnames';
import Image from 'next/image';

interface BottomSheetProps {
    data: Charm | undefined;
    isOpened: boolean;
    onClickCloseButton: () => void;
    onClickQuantity: (quantity: number) => void;
    onChangeQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
    quantity: number;
}

const BottomSheet = ({ data, onClickCloseButton, onClickQuantity, quantity, onChangeQuantity, isOpened = false }: BottomSheetProps) => {

    const bottomSheetLogicClass = classNames({
        'hidden': !isOpened
    });

    const animationPopup = classNames({
        'translate-y-0': isOpened
    });

    return (
        <>
            {/* Background overlay */}
            <div className={`fixed transition-all duration-700 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 pointer-events-none ${bottomSheetLogicClass}`}></div>
            <div className={`fixed bottom-0 flex flex-col left-0 bg-white max-h-[70%] h-1/2 w-full rounded-tl-lg rounded-tr-lg transition-[transform] duration-1000 -translate-y-full ${animationPopup} ${bottomSheetLogicClass}`}>
                {/* Close Button */}
                <div className='absolute top-0 right-0 flex flex-row-reverse px-4 z-10'>
                    <ButtonWithIcon
                        color={'invisible'}
                        onClick={onClickCloseButton}>
                        <CloseIcon />
                    </ButtonWithIcon>
                </div>
                <div className='flex flex-col h-full overflow-y-auto'>
                    {/* Header */}
                    <div className='flex flex-row items-end gap-2 sticky top-0 bg-white p-2 pb-3 border-b'>
                        {
                            data &&
                            <Image width={100} height={100} src={data.imageUrl} alt={data.name} />
                        }
                        <div>
                            <p className="text-red-500 text-lg ">{data?.getPriceFormat()}</p>
                            <span className='text-sm'>Kho: {data?.quantity}</span>
                        </div>
                    </div>
                    {/* Category */}
                    {
                        data && data.items.length > 0 &&
                        <div className='flex flex-col gap-2 bg-white p-2 border-b pb-3'>
                            <h3>Phân Loại</h3>
                            <div className='flex flex-row flex-wrap gap-4'>
                                {data.items.map((item, index) => (
                                    <div key={index} className='flex flex-row items-center bg-gray-200 w-fit pr-2 gap-2'>
                                        <Image width={40} height={40} src={item.imageUrl} alt="" />
                                        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    }
                    {/* Quantity */}
                    <div className='flex flex-col gap-2 bg-white p-2 pb-3'>
                        <h3>Số Lượng</h3>
                        <div className='flex flex-row'>
                            <button type="button" onClick={() => onClickQuantity(-1)} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="numeric" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                value={quantity} onChange={(e) => onChangeQuantity(e)} />
                            <button type="button" onClick={() => onClickQuantity(1)} className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-full shadow-[-2px_-18px_15px_-3px_rgba(0,0,0,0.1)] relative z-10'>
                    <ButtonWithIcon color={'success'} onClick={() => { }} >
                        <p className="text-lg">Thêm Vào Giỏ Hàng</p>
                    </ButtonWithIcon>
                </div>
            </div>
        </>
        // <div id='bottom-sheet' className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-40 h-full w-full z-[80] bg-white border-b  hidden" tabIndex={-1}>
        //     <div className="flex justify-between items-center py-3 px-4 border-b ">
        //         <ButtonWithIcon 
        //             color={'invisible'} 
        //             onClick={handleClose}>
        //             <CloseIcon />
        //         </ButtonWithIcon>
        //     </div>
        //     <div className="p-4">
        //         <p className="text-gray-800 ">
        //             Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        //         </p>
        //     </div>
        // </div>
    );
};

export default BottomSheet;
