import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Sponsors from '../components/Sponsors';

const Home = () => {
  return (
    <div>
      <Head>
        <title>OpenContent</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Benefits />
        <Sponsors />
      </main>
    </div>
  );
};

export default Home;
