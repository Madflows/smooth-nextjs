import React, { useEffect } from 'react';
import SectionHeader from '../SectionHeader';
import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Footer() {
   useEffect(() => {
     gsap.registerPlugin(SplitText, ScrollTrigger);

     const split = new SplitText('#location-text', {
       type: 'lines,chars',
       linesClass: 'lineChildren',
     });
     const splitParent = new SplitText('#location-text', {
       type: 'lines',
       linesClass: 'lineParent',
     });

     gsap.from(split.chars, {
       duration: 1,
       y: '200px',
       stagger: 0.1,
       scrollTrigger: {
         trigger: '.location',
         start: 'top 90%',
        //  end: '+=500',
       },
     });
   }, []);
  return (
    <section className='footer' data-scroll-section>
      <SectionHeader title={'Made in'} />
      <h1 className='location' id='location-text'>
        Lagos, Nigeria
      </h1>
    </section>
  );
}

export default Footer;
