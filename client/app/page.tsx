'use client';

import { motion } from 'framer-motion';
import CharmList from './components/CharmList';
import Header from './components/Header';


export default function Home() {


  return (
    <main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-50 flex flex-col min-h-screen w-full mx-auto"
      >
        <Header />
        <main className='mb-4'>
          {/* <section className='pt-4 px-2'>
              <Filter />
            </section> */}
          <section className='pt-6 px-4'>
            <CharmList />
          </section>
        </main>
        {/* <Footer /> */}
      </motion.div>

    </main>
  );
}
