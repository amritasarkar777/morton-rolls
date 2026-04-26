import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import OurStory from '../components/OurStory';
import Products from '../components/Products';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <OurStory />
      <Products />
      <Footer />
    </>
  );
}
