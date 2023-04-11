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

    const footerTL = gsap.timeline();

    footerTL
    .to(
        '.footer',
        {
          marginLeft: '-5vw',
          marginRight: '-5vw',
          backgroundColor: '#ffffff',
          position: 'relative',
        },
      )
      .from(
        '.footer-title',
        {
          opacity: 0,
          y: '50px',
        },
        '<'
      )
      .from(split.chars, {
        duration: 1,
        y: '200px',
        stagger: 0.1,
        //  scrollTrigger: {
        //    trigger: '.location',
        //    start: 'top 90%',
        //     end: '+=500',
        //  },
      }, '<')
      

    ScrollTrigger.create({
      trigger: '.location',
      start: 'top 50%',
      end: '+=300',
      scrub: 1,
      animation: footerTL,
    });
  }, []);
  return (
    <section className='footer '>
      <h2 className='uppercase font-semibold tracking-[1px] font-syncopate text-black mb-[50px] footer-title'>
        Made in
      </h2>
      <h1 className='location' id='location-text'>
        Lagos, Nigeria
      </h1>
    </section>
  );
}

export default Footer;
