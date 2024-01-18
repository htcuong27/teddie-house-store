'use client';

import { useCartStore } from '@/store/cart';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import { formatCurrency } from '../ultilites/formatCurrency';

const Cart = () => {
    const [isOpenedBottomSheet, setIsOpenedBottomSheet] = useState(false);

    const { cart, getTotalPrice } = useCartStore();

    // const totalQuantity = useMemo(() => {
    //     return cart.reduce((acc, charm) => acc + charm.quantity, 0);
    // }, [cart]);

    // const getTotalPrice = useMemo(() => {
    //     return cart.reduce((acc, charm) => acc + (charm.minPrice * charm.quantity), 0);
    // }, [cart]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", mass: 0.5 }}
            className="bg-gray-50 flex flex-col min-h-screen w-full mx-auto"
        >
            {/* Header */}
            <Header2>Giỏ Hàng Của Bạn</Header2>
            {/* main */}
            <main className="flex-1 items-stretch flex w-full flex-col p-4">
                <div className='flex flex-col gap-4'>
                    {
                        cart.length === 0 ? 'Chưa có sản phẩm nào' :
                            cart.map((charm) => (
                                <div key={charm.id} className="bg-white flex justify-between gap-2 px-4 py-3.5 rounded-xl items-start">
                                    {/* charm image */}
                                    <Image
                                        width={130}
                                        height={130}
                                        loading="lazy"
                                        src={charm.imageUrl}
                                        alt="charm image"
                                        className="aspect-square object-contain object-center w-[130px]  rounded-lg"
                                    />
                                    <div className="flex flex-col gap-2">
                                        {/* charm name */}
                                        <h3 className="line-clamp-2 text-md h-15 font-bold text-gray-800 ">
                                            {charm.name}
                                        </h3>
                                        <p className="text-red-500 text-sm ">
                                            {formatCurrency(charm.price)}
                                        </p>
                                        <div className="justify-between border-t-[color:var(--greyscale-Grey-95,#F0F2F5)] flex w-full gap-5 pt-2 border-t border-solid items-start">
                                            {/* charm quantity */}
                                            <span className="flex gap-4 items-center">
                                                <h4 className='text-sm font-bold'>
                                                    Số Lượng
                                                </h4>
                                                <span className='text-sm'>
                                                    {charm.count}
                                                </span>
                                            </span>
                                            <span>
                                                <div role="button" onClick={() => setIsOpenedBottomSheet(true)}>
                                                    <ChevronDownIcon className='w-6 h-6' />
                                                </div>
                                                {/* Bottom Sheet */}
                                                <BottomSheet />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                {/* Coupon */}
                {/* <span className="justify-between items-center bg-white flex gap-5 mt-4 p-4 rounded-lg">
                    <div className="text-gray-700 text-sm font-semibold my-auto">
                        Thêm Mã Giảm Giá
                    </div>
                    <span className='-rotate-90'>
                        <ChevronDownIcon />
                    </span>
                </span> */}

                {/* Support customer */}
                <div className="text-neutral-800 text-sm font-semibold leading-6 mt-4">
                    <a href="tel:0702088389" className=" leading-6" >Hỗ Trợ Khách Hàng</a>
                </div>
            </main>

            {/* Footer */}
            <Footer2 linkName='Thanh Toán' linkTo='/checkout'>
                {/* <span className="justify-between items-stretch flex gap-5">
                    <div className="text-gray-600 text-sm leading-6">
                        Số Lượng Sản Phẩm
                    </div>
                    <div className="text-neutral-800 text-sm leading-6">{totalQuantity}</div>
                </span> */}
                {/* <span className="justify-between items-stretch flex gap-5 mt-1">
                    <div className="text-gray-600 text-sm leading-6">Subtotal</div>
                    <div className="text-neutral-800 text-sm leading-6">$94,98</div>
                </span> */}
                <span className="justify-between items-stretch flex gap-5 mt-1">
                    <div className="text-gray-600 text-sm leading-6">Phí Ship</div>
                    <div className="text-neutral-800 text-sm font-semibold self-start">
                        Free
                    </div>
                </span>
                <span className="justify-between items-stretch flex gap-5 mt-1">
                    <div className="text-gray-600 text-sm leading-6">Total</div>
                    <div className="text-neutral-800 text-sm font-semibold self-start">
                        {getTotalPrice()}
                    </div>
                </span>
            </Footer2>
        </motion.div>
    );
};

export default Cart;