'use client';

import { useBottomSheetStore, useCartStore } from "@/store/cart";
import { useNavStore } from "@/store/nav";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Product, ProductCategoryType, ProductItem } from '../model/Charm';
import { formatCurrency } from "../ultilites/formatCurrency";
import BottomSheet from './BottomSheet/BottomSheet';
import CharmItem from './CharmItem';
import Counter from "./Counter";


const CharmList = () => {
    const [selectedCharm, setSelectedCharm] = useState<Product>();
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Product[]>();

    const { add: handleAddToCart } = useCartStore();
    const { closeCart, openCart, isOpened } = useBottomSheetStore();
    const { selectedNav } = useNavStore();


    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/charms', {
                    headers: {
                        Accept: 'application/json',
                        method: 'GET'
                    }
                });
                if (response) {
                    const data = await response.json();
                    setData(data.data)
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchDataFromApi();
    }, []);


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
                    data && data.map(charm => {
                        if (selectedNav === ProductCategoryType.ALL || charm.category === selectedNav) {
                            return getCharmItemJSX(charm);
                        }
                        if (charm.category !== selectedNav) {
                            return null;
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