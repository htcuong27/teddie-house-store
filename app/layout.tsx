"use client";
import Header from '@/app/ui/header';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from './ui/footer';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['vietnamese'],
});

export const metadata: Metadata = {
  title: 'Teddie House',
  description:
    'Không gian mua sắm trực tuyến đầy màu sắc với các phụ kiện nhỏ xinh cho mọi lứa tuổi. Dễ dàng chọn lựa, đặt hàng và nhận những sản phẩm chất lượng tại nhà. Tận hưởng trải nghiệm mua sắm an toàn và thuận tiện ngay hôm nay!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${roboto.className}`}>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
