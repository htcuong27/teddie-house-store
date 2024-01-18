'use client'
import CharmList from './components/CharmList';
import Footer from './components/Footer';
import Header from './components/Header';
import PageAnimation from './components/PageAnimation';
import TabBar from './components/TabBar';

export default function Home() {

  return (
    <main>
      <PageAnimation>
        <Header />
        <TabBar />
        <main className='mb-4'>
          <section className='pt-6 px-4'>
            <CharmList />
          </section>
        </main>
        <Footer />
      </PageAnimation>
    </main>
  );
}
