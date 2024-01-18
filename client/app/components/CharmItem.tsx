import { ArrowRightEndOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { Product } from '../model/Charm';
import { formatCurrency } from '../ultilites/formatCurrency';
import ButtonWithIcon from './ButtonWithIcon';

type CharmItemProps = {
    onClickBuy: () => void;
    onClickAddToCart: (charm: Product) => void;
    charm: Product;
    isActive: boolean;
}

const CharmItem = ({ onClickBuy, onClickAddToCart, isActive, charm }: CharmItemProps) => {

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
                        {charm.name}
                    </h3>
                    <p className="text-red-500 text-sm ">
                        {formatCurrency(charm.price || 0)}
                    </p>
                    <div className="grid grid-cols-2 shadow-sm w-[calc(100%+1rem)] ml-[-0.5rem] mt-[1rem] ">
                        <ButtonWithIcon color={'orange'} onClick={() => onClickAddToCart(charm)}>
                            <p className="text-[0.5rem]">Thêm vào Giỏ Hàng</p>
                            <ShoppingCartIcon className='w-6 h-4' />
                        </ButtonWithIcon>
                        <ButtonWithIcon color={'yellow'} onClick={onClickBuy}>
                            <p className="text-[0.5rem]">Mua Ngay</p>
                            <ArrowRightEndOnRectangleIcon className='w-6 h-4' />
                        </ButtonWithIcon>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default CharmItem;