import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Header() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText('#header-text', {
      type: 'lines,chars',
      linesClass: 'lineChildren',
    });
    const splitParent = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineParent',
    });

   

    gsap.from(split.chars, {
      duration: 1,
      y: '500px',
      stagger: 0.05,
    })
  }, []);

  return (
    <section className='header-container' data-scroll-section>
      <ul className='header-menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id='header-text'>Art Object</h1>
    </section>
  );
}

export default Header;
