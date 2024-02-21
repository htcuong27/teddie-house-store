'use client'
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-outer-space text-white px-20 flex flex-col lg:flex-row items-center justify-between gap-4 min-h-[100px]'>
        <Typography variant='h2'>Happy with Teddie House</Typography>
        {/* <div className="w-full flex flex-col items-center gap-6">
            <div className="flex gap-7">
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Privacy Policy</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Cooperation</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Sponsorship</Link>
                <Link href={'/'} className="text-[#989898] transition-[color] duration-300 ease-in hover:text-white ">Contact Us</Link>
            </div>
        </div> */}
        <p>Copyright © 2024 TeddieDIYHouse, All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
