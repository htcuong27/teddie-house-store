'use client';
import ChevronDownIcon from '@/app/svgs/ChevronDownIcon';
import { useCartStore } from '@/store/zustand';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';

const Cart = () => {

    const { cart } = useCartStore();

    const totalQuantity = useMemo(() => {
        return cart.reduce((acc, charm) => acc + charm.quantity, 0);
    }, [cart]);

    const getTotalPrice = useMemo(() => {
        return cart.reduce((acc, charm) => acc + (charm.minPrice * charm.quantity), 0);
    }, [cart]);

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
                <div>
                    {
                        cart.length === 0 ? 'Chưa có sản phẩm nào' :
                            cart.map((charm) => (
                                <div key={charm.id} className="bg-white flex justify-between gap-2 px-4 py-3.5 rounded-xl items-start">
                                    {/* charm image */}
                                    <div className="items-start flex grow basis-[0%] flex-col justify-center">
                                        <Image
                                            width={130}
                                            height={130}
                                            loading="lazy"
                                            src={charm.imageUrl}
                                            alt="charm image"
                                            className="aspect-square object-contain object-center w-[130px]  rounded-lg"
                                        />
                                    </div>
                                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col overflow-hidden">
                                        {/* charm name */}
                                        <div className="text-neutral-800 text-base font-semibold">
                                            {charm.name}
                                        </div>
                                        {/* charm description */}
                                        {/* <div className=" text-neutral-800 text-ellipsis whitespace-nowrap text-sm leading-6">
                                        High-performance leggings with moisture-wicking fabric and
                                        four-way stretch, ideal for intense workouts
                                    </div> */}
                                        {/* charm price */}
                                        <div className="text-neutral-800 text-lg font-semibold whitespace-nowrap mt-2">
                                            {charm.getPriceFormat()}
                                        </div>
                                        <div className="justify-between border-t-[color:var(--greyscale-Grey-95,#F0F2F5)] flex w-full gap-5 mt-2 pt-2 border-t border-solid items-start">
                                            {/* charm quantity */}
                                            <span className="flex gap-4 items-start">
                                                <div className="text-neutral-800 text-center text-xs tracking-wide uppercase">
                                                    Số Lượng
                                                </div>
                                                <div className="text-neutral-800 text-center text-sm font-semibold self-stretch">
                                                    {charm.quantity}
                                                </div>
                                            </span>
                                            <span>
                                                <ChevronDownIcon />
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            ))
                    }
                </div>
                {/* Coupon */}
                <span className="justify-between items-center bg-white flex gap-5 mt-4 p-4 rounded-lg">
                    <div className="text-gray-700 text-sm font-semibold my-auto">
                        Thêm Mã Giảm Giá
                    </div>
                    <span className='-rotate-90'>
                        <ChevronDownIcon />
                    </span>
                    {/* <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db2ec3848c4948518de8e1e52596936456f12548c5aa43fe633d23c9221de02?apiKey=bb8dbc989cc34660ac54425ea8f28286&"
                        alt='down'
                        className="aspect-square object-contain object-center w-6  self-stretch shrink-0 max-w-full"
                    /> */}
                </span>

                {/* Support customer */}
                <div className="text-neutral-800 text-sm font-semibold leading-6 mt-4">
                    Hỗ Trợ Khách Hàng: <a href="tel:0702088389" className=" leading-6" >0702088389</a>
                </div>
            </main>

            {/* Footer */}
            <Footer2 linkName='Thanh Toán' linkTo='/checkout'>
                <span className="justify-between items-stretch flex gap-5">
                    <div className="text-gray-600 text-sm leading-6">
                        Số Lượng Sản Phẩm
                    </div>
                    <div className="text-neutral-800 text-sm leading-6">{totalQuantity}</div>
                </span>
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
                        {getTotalPrice}
                    </div>
                </span>
            </Footer2>
        </motion.div>
    );
};

export default Cart;