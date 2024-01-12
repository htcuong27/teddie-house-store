import CharmList from './components/CharmList';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <section className='pt-4 px-2'>
        <Filter />
      </section>
      <section className='pt-6 px-4'>
        <CharmList />
      </section>
      <Footer />
    </main>
  );
}
