import { NextResponse } from 'next/server';
import { Product, ProductCategoryType } from '../../model/Charm';

const items: Product[] = [
    {
        id: 1,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 3
    },
    {
        id: 2,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 10
    },
    {
        id: 3,
        name: '[Lựa live] MINI - Charm xinh mini đong ml',
        category: ProductCategoryType.CHARM,
        price: 139000,
        items: [],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c0e0d040460a451dbff58548b47fd543~tplv-o3syd03w52-origin-jpeg.jpeg',
        isDiscountable: false,
        capacity: 100
    },
    {
        id: 4,
        name: '[Lựa live] Charm xinh DIY đong ml nhà Teddie',
        category: ProductCategoryType.KEYCHAIN,
        price: 89000,
        capacity: 1000,
        isDiscountable: false,
        items: [
            {
                price: 89000,
                capacity: 150,
                name: '150ml',
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7c14962aa21b4a40ac3e800d28d3e4ad~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845'
            },
            {
                price: 149000,
                capacity: 250,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c4c698fc768c4f8990077ac3c87095a9~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '250ml'
            },
            {
                price: 199000,
                capacity: 350,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f258cfb130394aaaa87c3f71b6461168~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '350ml'
            },
            {
                price: 309000,
                capacity: 600,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9892f9df9f0140c0a860eb31ed67dce3~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '600ml'
            },
            {
                price: 560000,
                capacity: 1200,
                imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dc6fdff15bd94d59a9467698fde7762f~tplv-o3syd03w52-origin-jpeg.jpeg?from=520841845',
                name: '1200ml'
            },
        ],
        imageUrl: 'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/286f083f906547e08bdcc795057a1660~tplv-o3syd03w52-origin-jpeg.jpeg'
    }
];

export async function GET() {
    return NextResponse.json({
        data: items
    })
}