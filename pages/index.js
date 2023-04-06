import About from '@/components/About';
import CustomCursor from '@/components/CustomCursor';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className='main-container py-0 px-[5vw]' id='main-container'>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
