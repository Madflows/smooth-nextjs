import photos from '@/data/photos';
import React, { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Featured() {
  const [firstUrl, secondUrl] = photos;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.clipped-image',
        markers: false,
        start: 'top 90%',
        end: '+=0',
      },
    });

    tl.to('.clipped-image', {
      clipPath: 'inset(0% 0% 0% 0%)',
    });


  }, [])
  return (
    <section className='featured-section' data-scroll-section>
      <div className='featured-row-layout'>
        <h6>green</h6>
        <img className='clipped-image' src={firstUrl} alt='wahala' />
      </div>
      <div className='featured-column-layout'>
        <h6>lily</h6>
        <img className='clipped-image' src={secondUrl} alt='Bread' />
      </div>
    </section>
  );
}

export default Featured;
