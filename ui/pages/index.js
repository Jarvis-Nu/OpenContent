import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>OpenContent</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
