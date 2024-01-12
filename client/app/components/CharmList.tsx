'use client';

import React, { ChangeEvent, useState } from 'react';
import CharmItem from './CharmItem';
import { Charm, ICharm } from '../interface/Charm';
import BottomSheet from './BottomSheet/BottomSheet';

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
        quantity:300,
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

    const handleClickBuy = () => {
        console.log('buy');
    };

    const handleClickAddToCart = (charmItem: Charm) => {
        setIsOpenedBottomSheet(true);
        setSelectedCharm(charmItem);
    };

    const handleCloseBottomSheet = () => {
        setIsOpenedBottomSheet(false);
    }

    const handleQuantityClick = (quantityInput: number) => {
        if ((quantity === 1 && quantityInput < 0 ) || (quantity > (selectedCharm?.quantity || 0) && quantityInput > 0)) return;
        setQuantity((prevState) => prevState + quantityInput);
    }

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuantity(+value);
    }

    const handleClickAddToCartInBottomSheet = () => {

    }


    return (
        <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-xl'>Các loại charms của <span className='italic'>Teddie House</span></h2>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-8  sm:grid-cols-3 lg:grid-cols-4'>
                {
                    charms.map(charm => (
                        <CharmItem 
                            key={charm.id} 
                            charm={charm} 
                            onClickBuy={handleClickBuy}
                            onClickAddToCart={handleClickAddToCart} />
                    ))
                }
            </ul>
            <BottomSheet quantity={quantity} onChangeQuantity={handleQuantityChange} onClickQuantity={handleQuantityClick} onClickCloseButton={handleCloseBottomSheet} isOpened={isOpenedBottomSheet} data={selectedCharm} />
        </div>
    );
};

export default CharmList;