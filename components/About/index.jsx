import React, { useEffect } from 'react';
import SectionHeader from '../SectionHeader';
import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function About() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText('#headline', {
      type: 'lines,chars',
    });

    gsap.from(split.lines, {
      duration: 1,
      y: 20,
      scale: 2,
      stagger: 0.1,
      ease: 'power2',
      opacity: 0,
      scrollTrigger: {
        trigger: '#headline',
        start: 'top 90%',
        end: '+=500',
        scrub: 1
      },
    });
  }, []);
  return (
    <section className='about-section' data-scroll-section>
      <SectionHeader title={'About'} />
      <p id='headline'>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}

export default About;
