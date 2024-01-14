'use client';

import { useMemo, useState } from 'react';
import Cart from './components/Cart';
import CharmList from './components/CharmList';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  const [hasOpenedCart, setHasOpenedCart] = useState(false);

  const checkOpenCart = useMemo(() => {
    return (
      !hasOpenedCart ?
        <>
          <Header onClickCart={() => setHasOpenedCart(true)} />
          <section className='pt-4 px-2'>
            <Filter />
          </section>
          <section className='pt-6 px-4'>
            <CharmList />
          </section>
          <Footer />
        </> :
        <>
          <Cart onClickClose={() => setHasOpenedCart(false)} />
        </>
    );
  }, [hasOpenedCart]);

  return (
    <main>
      {checkOpenCart}
    </main>
  );
}
