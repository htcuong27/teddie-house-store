import React, { useState } from 'react';
import ButtonWithIcon from './ButtonWithIcon';
import CartIcon from '../svgs/CartIcon';
import ForwardIcon from '../svgs/ForwardIcon';
import { Charm, ICharm } from '../interface/Charm';
import Image from 'next/image';
import classNames from 'classnames';

interface CharmItemProps {
    onClickBuy: () => void;
    onClickAddToCart: (charm: Charm) => void;
    charm: ICharm;
    isActive: boolean;
}

const CharmItem = ({ onClickBuy, onClickAddToCart, isActive, charm }: CharmItemProps) => {
    const [charmItem, setCharmItem] = useState(new Charm(charm));

    const scaleItem = classNames({
        'scale-105': isActive
    });

    const shadowLg = classNames({
        'shadow-lg': isActive
    });

    return (
        <li className='flex flex-col' onClick={(e) => e.preventDefault()}>
            <a className={`flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg ${shadowLg} transition`} href="#">
                <div className="relative pt-[100%] rounded-t-xl overflow-hidden">
                    <Image className={`w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 ${scaleItem} transition-transform duration-500 ease-in-out rounded-t-xl`} width={1000} height={1000} src={charm.imageUrl} alt="Image Description" />
                </div>
                <div className="p-2 pb-0 flex flex-col gap-2">
                    <h3 className="line-clamp-2 text-sm h-10 font-bold text-gray-800 ">
                        {charmItem.name}
                    </h3>
                    <p className="text-red-500 text-sm ">
                        {charmItem.getPriceFormat() || 0}
                    </p>
                    <div className="grid grid-cols-2 shadow-sm w-[calc(100%+1rem)] ml-[-0.5rem] mt-[1rem]">
                        <ButtonWithIcon color={'success'} onClick={() => onClickAddToCart(charmItem)}>
                            <p className="text-[0.5rem]">Thêm vào Giỏ Hàng</p>
                            <CartIcon />
                        </ButtonWithIcon>
                        <ButtonWithIcon color={'alert'} onClick={onClickBuy}>
                            <p className="text-[0.5rem]">Mua Ngay</p>
                            <ForwardIcon />
                        </ButtonWithIcon>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default CharmItem;