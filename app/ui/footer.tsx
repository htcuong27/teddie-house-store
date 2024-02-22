'use client'
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <footer className='mt-4 bg-secondary-color rounded-tl-full rounded-tr-full text-white px-20'>
      <div className='py-8 flex md:flex-row sm:flex-col flex-col items-center justify-between gap-3'>
        <Typography variant='h3' className='font-bold text-xl whitespace-nowrap'>Happy with Teddie House</Typography>
        {/* <div className="w-full flex flex-col items-center gap-6">
            <div className="flex gap-7">
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Privacy Policy</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Cooperation</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Sponsorship</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Contact Us</Link>
            </div>
        </div> */}
        <Typography variant='paragraph' className='text-center whitespace-nowrap text-sm'>Copyright © 2024 TeddieDIYHouse, All Rights Reserved.</Typography>
      </div>
    </footer>
  );
};

export default Footer;
