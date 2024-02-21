'use client';

import { ProductCategoryType } from "@/models/Product";
import { useCartStore } from "@/app/store/cart";
import { useNavStore } from "@/app/store/nav";
import { Bars3Icon, ChevronDownIcon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Badge, Menu, IconButton, Navbar, Typography, MenuHandler, MenuItem, MenuList, ListItem, Collapse, List } from "@material-tailwind/react";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

const menus = [
    ProductCategoryType.ALL,
    ProductCategoryType.CHARM,
    ProductCategoryType.KEYCHAIN,
];

function NavList() {
    return (
        <Typography as="div" variant="small" className="color-black bg-red font-medium mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex lg:justify-start lg:items-center flex-col">
            {/* <Typography
                variant="small"
                className="font-bold"
            > */}
            <Link href="/">
                <ListItem>
                    Home
                </ListItem>
            </Link>
            {/* </Typography> */}
            <NavListMenu />
            {/* <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
            > */}
            <Link href="/">
                <ListItem>
                    Contact Us
                </ListItem>
            </Link>
            {/* </Typography> */}
        </Typography >
    );
}

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setSelectedCategory } = useNavStore();
    const renderItems = menus.map(
        (menu, key) => (
            <Link href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg" onClick={() => setSelectedCategory(menu)}>
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-medium"
                        >
                            {menu}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );

    return (
        <>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex gap-2"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </>
    );
}

const Header = () => {
    const { countCart } = useCartStore();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);



    return (
        <Navbar className='sticky top-0 z-10 rounded-none px-4 py-2 lg:px-8 lg:py-4 max-w-full'>

            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href='/' className="flex-1 gap-3 flex items-center">
                    <Image className='aspect-square object-contain rounded-full border border-gray-500' width={60} height={60} src="/teddiehouse.jpg" alt="" />
                    <div className="flex flex-row justify-start items-center flex-1" aria-label="Brand">
                        <Typography variant="lead" className='tracking-widest font-bold'>
                            <span className='text-[#ca8360]'>TEDDIE</span>&nbsp;
                            <span className='text-[#735a32]'>HOUSE</span>
                        </Typography>
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
                {/* <button className='text-wrap py-2 px-3 mr-3 cursor-pointer bg-black text-white rounded'>Bắt Đầu</button> */}
                {
                    countCart() !== 0 &&
                    <Link href="/cart">
                        <Badge content={countCart()} withBorder >
                            <IconButton className="rounded-full" color="white" ripple={false}>
                                <ShoppingCartIcon className="h-6 w-6" />
                            </IconButton>
                        </Badge>
                    </Link>
                }
            </div>
            <Collapse className="text-black" open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};



export default Header;