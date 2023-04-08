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

  

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

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
