import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

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
      </main>
    </div>
  );
};

export default Home;
