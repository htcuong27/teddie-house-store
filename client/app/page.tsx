import Image from 'next/image';
import CharmList from './components/CharmList';
import Header from './components/Header';
import BottomSheet from './components/BottomSheet/BottomSheet';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <section className='pt-10 px-4'>
        <CharmList />
      </section>
      <Footer />
    </main>
  );
}
