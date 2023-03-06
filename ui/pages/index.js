import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import connectContract from "../utils/connectContract"

const Home = () => {
  return (
    <div>
      <Head>
        <title>OpenContent</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <ConnectButton />
        <button onClick={async() => {
          const date = new Date()
          const web3cmsContract = connectContract()
          const txn = await web3cmsContract.createNewBlogPost(["contentName","contentName","contentName","contentName","contentName","contentName","contentName",])
          console.log(txn.wait)
        }}>Click me</button>
      </main>
    </div>
  );
};

export default Home;
