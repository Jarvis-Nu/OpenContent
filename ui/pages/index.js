import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Sponsors from '../components/Sponsors';
import Block from '../components/Block';
import ReversedBlock from '../components/ReversedBlock';
import Footer from '../components/Footer';
import WaitList from '../components/WaitList';

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
        <Block 
          subtitle={"Blog templates"} 
          title={"Professional Blog Templates"}
          description={`
            With OpenContent's blog templates, you can easily create a stunning and functional blog. 
            Whether you're a professional blogger or just starting out, our templates provide a variety of options to suit your needs.
            From classic blog layouts to modern designs, our templates make it easy to create a blog that stands out.
          `} 
          image={"/write.png"}
        />
        <ReversedBlock 
          subtitle={"Vlogs templates"} 
          title={"Engage Viewers with Vlogs"}
          description={`
            OpenContent's vlog templates offer a range of layouts and designs for video creators. 
            Our templates provide options for showcasing your latest videos, highlighting your brand, 
            and creating a unique online presence. With easy customization options, you can quickly 
            create a vlog that represents your style and personality.
          `} 
          image={"/view.png"}
        />
        <Block 
          subtitle={"Audio templates"} 
          title={"Create with Audio Templates"}
          description={`
            OpenContent's audio templates provide an easy way to create a professional-looking website. 
            Whether you're a podcaster or musician, our templates offer options for showcasing your latest 
            audio content and engaging with your audience. With intuitive customization options, you can make 
            your audio site look and feel just the way you want it to.
          `} 
          image={"/record.png"}
        />
        <WaitList />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
