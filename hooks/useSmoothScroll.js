import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 3,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
