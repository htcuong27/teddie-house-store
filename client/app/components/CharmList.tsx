'use client';

import { useCartStore } from "@/store/zustand";
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { Charm, ICharm } from '../interface/Charm';
import MinusIcon from "../svgs/MinusIcon";
import PlusIcon from "../svgs/PlusIcon";
import BottomSheet from './BottomSheet/BottomSheet';
import ButtonWithIcon from './ButtonWithIcon';
import CharmItem from './CharmItem';

const charms: ICharm[] = [
    {
        id: 1,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        size: 'MINI',
        minPrice: 139000,
        maxPrice: 139000,
        quantity: 1000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg'
    },
    {
        id: 3,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        size: 'MINI',
        minPrice: 139000,
        maxPrice: 139000,
        quantity: 300,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg'
    },
    {
        id: 4,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        size: 'MINI',
        minPrice: 139000,
        maxPrice: 139000,
        quantity: 4909,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg'
    },
    {
        id: 2,
        name: '[Lựa live] Charm xinh DIY đong ml nhà Teddie',
        size: 'BIG',
        minPrice: 89000,
        maxPrice: 560000,
        quantity: 1000,
        items: [
            {
                price: 89000,
                capacity: 150,
                unit: 'ml',
                name: '150ml',
                special: 'tặng 1 charm',
                quantity: 100,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c14962aa21b4a40ac3e800d28d3e4ad~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845'
            },
            {
                price: 149000,
                capacity: 250,
                unit: 'ml',
                special: 'tặng 2 charm',
                quantity: 200,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c4c698fc768c4f8990077ac3c87095a9~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '250ml'
            },
            {
                price: 199000,
                capacity: 350,
                unit: 'ml',
                special: 'tặng 3 charm',
                quantity: 300,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f258cfb130394aaaa87c3f71b6461168~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '350ml'
            },
            {
                price: 309000,
                capacity: 600,
                unit: 'ml',
                special: 'tặng 5 charm',
                quantity: 400,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9892f9df9f0140c0a860eb31ed67dce3~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '600ml'
            },
            {
                price: 560000,
                capacity: 1200,
                unit: 'ml',
                quantity: 500,
                special: 'tặng 10 charm',
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dc6fdff15bd94d59a9467698fde7762f~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '1200ml'
            },
        ],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/286f083f906547e08bdcc795057a1660~tplv-o3syd03w52-origin-jpeg.jpeg'
    }
];

const CharmList = () => {
    const [selectedCharm, setSelectedCharm] = useState<Charm>();
    const [isOpenedBottomSheet, setIsOpenedBottomSheet] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    const { add: handleAddToCart } = useCartStore();

    const handleClickBuy = () => {
        console.log('buy');
    };

    const handleClickAddToCart = (charmItem: Charm) => {
        setIsOpenedBottomSheet(true);
        setSelectedCharm(charmItem);
        setQuantity(1);
    };

    const handleCloseBottomSheet = () => {
        setIsOpenedBottomSheet(false);
    };

    const handleQuantityClick = (quantityInput: number) => {
        if ((quantity === 1 && quantityInput < 0) || (quantity > (selectedCharm?.quantity || 0) && quantityInput > 0)) return;
        setQuantity((prevState) => prevState + quantityInput);
    };

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuantity(+value);
    };

    const handleClickAddToCartInBottomSheet = () => {
        setIsOpenedBottomSheet(false);
        if (selectedCharm) {
            handleAddToCart(selectedCharm);
        }
    };


    return (
        <div className=''>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-8  sm:grid-cols-3 lg:grid-cols-4'>
                {
                    charms.map(charm => (
                        <CharmItem
                            isActive={(isOpenedBottomSheet && selectedCharm?.id === charm.id) ? true : false}
                            key={charm.id}
                            charm={charm}
                            onClickBuy={handleClickBuy}
                            onClickAddToCart={handleClickAddToCart} />
                    ))
                }
            </ul>
            <BottomSheet
                onClickCloseButton={handleCloseBottomSheet}
                isOpened={isOpenedBottomSheet}>

                <div className='flex flex-col w-full gap-4 overflow-y-auto scrollbar pb-2'>
                    {/* Header */}
                    <div className='flex flex-row justify-stretch w-full gap-2 sticky top-0 pb-4 border-b bg-white shadow-sm'>
                        {
                            selectedCharm &&
                            <Image width={100} height={100} src={selectedCharm.imageUrl} alt={selectedCharm.name} />
                        }
                        <div>
                            <p className="text-red-500 text-lg ">{selectedCharm?.getPriceFormat()}</p>
                            <span className='text-sm'>Kho: {selectedCharm?.quantity}</span>
                        </div>
                    </div>
                    {/* Category */}
                    {
                        selectedCharm && selectedCharm.items.length > 0 &&
                        <div className='flex flex-col gap-2 bg-white border-b pb-4'>
                            <h3>Phân Loại</h3>
                            <div className='flex flex-row flex-wrap gap-4 '>
                                {selectedCharm.items.map((item, index) => (
                                    <div key={index} className='flex items-center bg-stone-50 p-2 gap-2 shadow-sm border rounded-md hover:bg-slate-300 hover:scale-105 hover:shadow-md transition-all duration-300'>
                                        <img className='rounded-tl-md rounded-bl-md' width={40} height={40} src={item.imageUrl} alt={item.name} />
                                        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    }
                    {/* Quantity */}
                    <div className='flex flex-col gap-2 bg-white border-b pb-4'>
                        <h3>Số Lượng</h3>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <button
                                className="w-8 h-8 p-2 bg-neutral-800 rounded-full justify-center items-center gap-2 inline-flex"
                                type="button"
                                onClick={() => handleQuantityClick(-1)}
                            >
                                <MinusIcon />
                            </button>
                            {/* Input */}

                            <input inputMode="numeric" pattern="[0-9]*" type="text"
                                value={quantity} onChange={(e) => handleQuantityChange(e)}
                                className="w-[65px] h-12 p-3 bg-white rounded border border-zinc-200 basis-0 text-center text-gray-500 text-base font-normal leading-normal" />

                            <button
                                className="w-8 h-8 p-2 bg-neutral-800 rounded-full justify-center items-center gap-2 inline-flex"
                                type="button"
                                onClick={() => handleQuantityClick(1)}
                            >
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Add To Cart */}
                <div className='left-0 right-0 bg-white pt-4 w-full sticky bottom-0 z-10'>
                    <ButtonWithIcon color={'success'} onClick={handleClickAddToCartInBottomSheet} >
                        <p className="text-lg">Thêm Vào Giỏ Hàng</p>
                    </ButtonWithIcon>
                </div>
            </BottomSheet>
        </div>
    );
};

export default CharmList;