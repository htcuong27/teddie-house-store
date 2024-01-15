import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface Footer2Props extends PropsWithChildren {
    linkTo: string;
    linkName: string;
}

const Footer2 = ({ linkTo, children, linkName }: Footer2Props) => {
    return (
        <footer className="sticky bottom-0 items-stretch border-t-[color:var(--greyscale-Grey-92,#DFE2E8)] bg-white flex w-full flex-col mt-1.5 px-4 py-2 border-t border-solid">
            {children}
            <Link href={linkTo} className="text-white text-center text-lg font-semibold whitespace-nowrap justify-center items-center bg-gray-800 mt-2 px-16 py-3.5 rounded-xl">
                {linkName}
            </Link>
        </footer>
    );
};

export default Footer2;