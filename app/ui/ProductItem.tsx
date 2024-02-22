import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '../lib/utils';
import { Product } from '../models/Product';

type ProductItemProps = {
  onClickBuy: () => void;
  onClickAddToCart: (charm: Product) => void;
  product: Product;
  isActive: boolean;
};

const ProductItem = ({
  onClickBuy,
  onClickAddToCart,
  isActive,
  product,
}: ProductItemProps) => {
  const scaleItem = classNames({
    'scale-105': isActive,
  });

  const shadowLg = classNames({
    'shadow-lg': isActive,
  });

  return (
    <Link href={`/product/${product.id}`}>
      <Card shadow={true} className="group hover:shadow-none">
        <CardHeader shadow={false} floated={false} className="">
          <Image
            src={product.imageUrl}
            width={322}
            height={322}
            alt="card-image"
            className="object-cover w-full h-full  group-hover:scale-105"
          />
        </CardHeader>
        <CardBody className='p-0 pb-2 px-4 leading-[1.6] mt-1'>
          <Typography variant='h3' color="gray" className="text-sm truncate font-normal tracking-tight mb-[3px]">
            {product.name}
          </Typography>
          <Typography variant='paragraph' className="font-bold">
            {formatCurrency(product.price)}
          </Typography>
        </CardBody>
          
          {/* <Button
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            onClick={(e) => (e.preventDefault(), onClickAddToCart(product))}
          >
            Thêm vào Giỏ
          </Button> */}
      </Card>
    </Link>
    // <Link href={`/product/${product.id}`} className='p-5 bg-white rounded-3xl shadow-xl transition-all ease-linear duration-300 hover:shadow-none cursor-pointer'>
    //   <div className='pt-[100%] w-full relative flex-shrink-0'>
    //     <Image
    //       className='rounded-xl absolute top-0 left-0'
    //       src={product.imageUrl}
    //       width={500}
    //       height={500}
    //       alt="Test" />
    //   </div>
    //   <div className='py-3 border-b-2 border-solid border-[#edecec]'>
    //     <div className="flex flex-col gap-2">
    //       <h5 className='text-lg font-medium line-clamp-2 h-[56px]'>{product.name}</h5>
    //       <div className='flex items-center gap-2 justify-between'>
    //         <div className='flex items-center gap-1'>
    //           <CurrencyDollarIcon className='w-5 h-5 text-[#47c551]' />
    //           <p className='text-lg font-medium'>{formatCurrency(product.price || 0)}</p>
    //         </div>
    //         <p className='text-sm text-[#989898]'>5 of 33</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='pt-3 pb-1 flex items-center justify-between'>
    //     <p className='bg-[#edecec] py-1 px-2 text-xs rounded-xl'>2h 29m 1s</p>
    //     <button
    //       className='bg-transparent text-[#304ffe] font-medium transition-all ease-linear duration-300 hover:text-white hover:bg-black py-2 px-4 text-xl rounded-xl'
    //       onClick={(e) => (e.preventDefault(), onClickAddToCart(product))}
    //     >Thêm vào Giỏ</button>
    //   </div>
    // </Link>
    // <article className="relative group">
    //   <div
    //     className={`relative pt-[80%] rounded-t-xl overflow-hidden rounded-3xl ${shadowLg}`}
    //   >
    //     <Image
    //       className={`w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 ${scaleItem} transition-transform duration-500 ease-in-out rounded-t-xl`}
    //       width={500}
    //       height={500}
    //       src={charm.imageUrl}
    //       alt="Image Description"
    //     />
    //     <div className="absolute bottom-0 top-0 left-0 right-0">
    //       <div className="hidden h-full grid-cols-2 shadow-sm w-[calc(100%+1rem)] ml-[-0.5rem] group-hover:grid">
    //         <ButtonWithIcon
    //           color={'orange'}
    //           onClick={() => onClickAddToCart(charm)}
    //         >
    //           <p className="text-xs">Thêm vào Giỏ Hàng</p>
    //           <ShoppingCartIcon className="w-6 h-4" />
    //         </ButtonWithIcon>
    //         <ButtonWithIcon color={'yellow'} onClick={onClickBuy}>
    //           <p className="text-xs">Mua Ngay</p>
    //           <ArrowRightEndOnRectangleIcon className="w-6 h-4" />
    //         </ButtonWithIcon>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative mx-1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
    //     <h3 className="tracking-wide line-clamp-2 text-sm h-10 font-bold">
    //       {charm.name}
    //     </h3>
    //     <p className="text-red-500 text-sm ">
    //       {formatCurrency(charm.price || 0)}
    //     </p>
    //   </div>
    // </article>
  );
};

// const ProductItemLoading = () => {
//   return (
//     <Card shadow={true} className="w-full group hover:shadow-none">
//       <CardHeader shadow={false} floated={false} className="h-96">
//         <Image
//           src={product.imageUrl}
//           width={500}
//           height={500}
//           alt="card-image"
//           className="h-full w-full object-cove group-hover:scale-105"
//         />
//         <Skeleton className='w-[500px] h-[500px]' />
//       </CardHeader>
//       <CardBody>
//         <div className="mb-2 flex items-start flex-col justify-between gap-2  ">
//           <Typography variant='h5' color="blue-gray" className="line-clamp-2 h-[55px]">
//             {product.name}
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             {formatCurrency(product.price)}
//           </Typography>
//         </div>
//         <Typography
//           variant="small"
//           color="gray"
//           className="font-normal opacity-75"
//         >
//           With plenty of talk and listen time, voice-activated Siri access, and
//           an available wireless charging case.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button
//           fullWidth={true}
//           className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//           onClick={(e) => (e.preventDefault(), onClickAddToCart(product))}
//         >
//           Thêm vào Giỏ
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

export default ProductItem;
