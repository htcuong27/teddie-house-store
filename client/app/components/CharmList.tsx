'use client';

import { useBottomSheetStore, useCartStore } from "@/store/cart";
import { useNavStore } from "@/store/nav";
import Image from 'next/image';
import { useState } from 'react';
import { Product, ProductCategoryType, ProductItem } from '../model/Charm';
import { formatCurrency } from "../ultilites/formatCurrency";
import BottomSheet from './BottomSheet/BottomSheet';
import CharmItem from './CharmItem';
import Counter from "./Counter";

// Mock Data
const items: Product[] = [
    {
        id: 1,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 3
    },
    {
        id: 2,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 10
    },
    {
        id: 3,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 100
    },
    {
        id: 4,
        name: '[Lựa live] Charm xinh DIY đong ml nhà Teddie',
        category: ProductCategoryType.KEYCHAIN,
        price: 89000,
        capacity: 1000,
        isDiscountable: false,
        items: [
            {
                price: 89000,
                capacity: 150,
                name: '150ml',
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c14962aa21b4a40ac3e800d28d3e4ad~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845'
            },
            {
                price: 149000,
                capacity: 250,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c4c698fc768c4f8990077ac3c87095a9~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '250ml'
            },
            {
                price: 199000,
                capacity: 350,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f258cfb130394aaaa87c3f71b6461168~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '350ml'
            },
            {
                price: 309000,
                capacity: 600,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9892f9df9f0140c0a860eb31ed67dce3~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '600ml'
            },
            {
                price: 560000,
                capacity: 1200,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dc6fdff15bd94d59a9467698fde7762f~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '1200ml'
            },
        ],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/286f083f906547e08bdcc795057a1660~tplv-o3syd03w52-origin-jpeg.jpeg'
    }
];

const CharmList = () => {
    const [selectedCharm, setSelectedCharm] = useState<Product>();
    const [quantity, setQuantity] = useState<number>(1);

    const { add: handleAddToCart } = useCartStore();
    const { closeCart, openCart, isOpened } = useBottomSheetStore();
    const { selectedNav } = useNavStore();


    const handleClickBuy = () => {
        console.log('buy');
    };

    const handleClickAddToCart = (charmItem: Product) => {
        openCart();
        setSelectedCharm(charmItem);
        setQuantity(1);
    };

    const handleClickAddToCartInBottomSheet = () => {
        closeCart();
        if (selectedCharm) {
            handleAddToCart(selectedCharm, quantity);
        }
    };

    const getCharmItemJSX = (charm: Product) => {
        return (<CharmItem
            isActive={(isOpened && selectedCharm?.id === charm.id) ? true : false}
            key={charm.id}
            charm={charm}
            onClickBuy={handleClickBuy}
            onClickAddToCart={handleClickAddToCart} />);
    };


    return (
        <>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-8  sm:grid-cols-3 lg:grid-cols-4'>
                {
                    items.map(charm => {
                        if (selectedNav === ProductCategoryType.ALL || charm.category === selectedNav) {
                            return getCharmItemJSX(charm);
                        }
                        if (charm.category !== selectedNav) {
                            return null
                        }
                    })
                }
            </ul>
            <BottomSheet>

                <div className='shrink-0 mb-8 min-w-0 p-0 m-0 flex flex-col'>
                    {/* Header */}
                    <div className='flex flex-row w-full p-4 justify-stretch gap-2 sticky top-0 border-b shadow-sm'>
                        {
                            selectedCharm &&
                            <Image width={100} height={100} src={selectedCharm.imageUrl} alt={selectedCharm.name} />
                        }
                        <div>
                            <p className="text-red-500 text-lg ">{formatCurrency(selectedCharm?.price || 0)}</p>
                            <span className='text-sm'>Kho: {selectedCharm?.capacity}</span>
                        </div>
                    </div>
                    {/* Category */}
                    {
                        selectedCharm && selectedCharm.items.length > 0 &&
                        <div className='flex flex-col p-4 justify-stretch gap-2 sticky top-0 border-b shadow-sm'>
                            <h3>Phân Loại</h3>
                            <div className='flex flex-row flex-wrap gap-4 '>
                                {selectedCharm.items.map((item: ProductItem, index: number) => (
                                    <div key={index} className='flex items-center bg-stone-50 p-2 gap-2 shadow-sm border rounded-md hover:bg-primary-color hover:scale-105 hover:shadow-md transition-all duration-300'>
                                        <Image className='rounded-tl-md rounded-bl-md' width={40} height={40} src={item.imageUrl} alt={item.name} />
                                        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    }
                    {/* Quantity */}
                    <Counter
                        quantity={quantity}
                        maxQuantity={selectedCharm?.capacity || 1}
                        onClickIncrease={() => setQuantity((preState) => preState + 1)}
                        onClickDecrease={() => setQuantity((preState) => preState - 1)}
                        onChangeQuantity={(value) => setQuantity(value)} />
                </div>
                {/* Add To Cart */}
                <button onClick={handleClickAddToCartInBottomSheet} className="sticky bottom-4 text-white p-4 text-center text-lg font-semibold whitespace-nowrap justify-center items-center bg-primary-color mb-4 mx-4 rounded-xl">
                    Thêm Vào Giỏ Hàng
                </button>
                {/* <div className='left-0 right-0 bg-white pt-4 w-full sticky bottom-0 z-10'>
                    <ButtonWithIcon color={'success'} onClick={handleClickAddToCartInBottomSheet} >
                        <p className="text-lg">Thêm Vào Giỏ Hàng</p>
                    </ButtonWithIcon>
                </div> */}
            </BottomSheet>
        </>
    );
};

export default CharmList;