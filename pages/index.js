import About from '@/components/About';
import CustomCursor from '@/components/CustomCursor';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { SmoothScrollProvider } from '@/contexts/Smoothscroll.context';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [preloader, setPreloader] = useState(true);

  

  

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <Loader />
      ) : (
        // <SmoothScrollProvider options={{ smooth: true, multiplier: 1 }}>
        <div
          data-scroll-container
          className='main-container py-0 px-[5vw]'
          id='main-container'
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
        // </SmoothScrollProvider>
      )}
    </>
  );
}
