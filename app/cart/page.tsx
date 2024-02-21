'use client';

import { useCartStore } from '@/app/store/cart';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Badge, Button, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { formatCurrency } from '../lib/utils';
import Counter from '../ui/Counter';

const Cart = () => {
  const [isOpenedBottomSheet, setIsOpenedBottomSheet] = useState(false);

  const { cart, update, remove, add, getTotalPrice } = useCartStore();

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
      transition={{ type: 'spring', mass: 0.5 }}
      className="flex-1 flex flex-col sticky top-0 w-full mx-auto"
    >
      {/* Header */}
      {/* <Header2>Giỏ Hàng Của Bạn</Header2> */}
      <Typography variant="h2" color="black" className="p-4">
        Shopping Cart
      </Typography>
      {/* main */}
      <main className="flex-1 min-h-full h-full items-stretch flex w-full flex-col p-4">
        <div className="flex flex-col gap-4">
          {cart.length === 0
            ? 'Chưa có sản phẩm nào'
            : cart.map((charm) => (

              <List className="flex gap-4" key={charm.id}>
                <Badge
                  className='right-0'
                  content={<XMarkIcon className="h-4 w-4" onClick={() => remove(charm.id)} />}
                  color="gray"
                >
                  <ListItem ripple={false} className="flex justify-between shadow-md bg-white">
                    <ListItemPrefix className='flex gap-4 items-start'>
                      <Image className='rounded-lg' alt="charm image" src={charm.imageUrl} width={100} height={100} />
                      <Link href={`product/${charm.id}`}>
                        <Typography className='font-medium' variant='h6'>{charm.name}</Typography>
                      </Link>
                    </ListItemPrefix>
                    <div className='flex flex-col-reverse items-end gap-4'>
                      <Counter
                        quantity={charm.quantity || 1}
                        capacity={charm.capacity}
                        onClickIncrease={() => add(charm, 1)}
                        onClickDecrease={() => add(charm, -1)}
                        onChangeQuantity={(value) => update(charm, value)}
                      />
                      <Typography className="font-medium" variant="paragraph">{formatCurrency(charm.quantity * charm.price)}</Typography>
                    </div>
                  </ListItem>
                </Badge>
              </List>
            ))}
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
      </main>

      {/* Footer */}
      <div className='px-10'>
        <span className="justify-between items-stretch flex gap-5 mt-1">
          <div className="text-gray-600 text-sm leading-6">Phí Ship</div>
          <div className="text-neutral-800 text-sm font-semibold self-start">
            Free
          </div>
        </span>
        <span className="justify-between items-stretch flex gap-5 mt-1">
          <div className="text-gray-600 text-sm leading-6">Total</div>
          <div className="text-neutral-800 text-sm font-semibold self-start">
            {formatCurrency(getTotalPrice())}
          </div>
        </span>
        <Link href={'/checkout'}>
          <Button size='lg'>Checkout</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Cart;
