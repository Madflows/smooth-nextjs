import { GALLERY_IMAGES } from '@/data/photos';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import React, { useEffect, useRef, useState } from 'react';

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.gallery-item-wrapper');

    gsap.to(galleryRef.current, {
      xPercent: -100,
      x: () => -1 * (galleryRef.current.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.gallery-wrap',
        pin: '.gallery-wrap',
        // snap: 1 / (sections.length - 1),
        start: 'top top',
         end: () =>  "+=" + (galleryRef.current.scrollWidth - window.innerWidth),
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <section className='section-wrapper gallery-wrap'>
      <div className='gallery' ref={galleryRef}>
        <div className='gallery-counter'>
          <span>{activeImage}</span>
          <span className='divider' />
          <span>{GALLERY_IMAGES.length}</span>
        </div>
        {GALLERY_IMAGES.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  return (
    <div className='gallery-item-wrapper'>
      <div />
      <div className='gallery-item'>
        <div className='gallery-item-info'>
          <h1 className='gallery-info-title'>{title}</h1>
          <h6 className='gallery-info-subtitle'>{subtitle}</h6>
          <p className='gallery-info-category'>{category}</p>
        </div>
        <div
          className='gallery-item-image'
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}
export default Gallery;
