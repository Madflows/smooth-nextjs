import { GALLERY_IMAGES } from '@/data/photos';
import useOnScreen from '@/hooks/useOnScreen';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import React, { useEffect, useRef, useState } from 'react';

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.timeline();
    let sections = gsap.utils.toArray('.gallery-item-wrapper');
    pin.to(sectionRef.current, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
    });
    ScrollTrigger.create({
      trigger: triggerRef.current,
      animation: pin,
      end: () => '+=2000',
      // snap: 1 / (sections.length - 1),
      // pinSpacing: true,
      scrub: 0.5,
      pin: true,
      markers: false,
    });
  }, []);

  return (
    <div className='section-wrapper gallery-wrap'>
      <div ref={triggerRef} className='trigger'>
        <div className='gallery' ref={sectionRef}>
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
              activeImage={activeImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  activeImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);
  return (
    <div ref={ref} className='gallery-item-wrapper'>
      <div />
      <div
        className={`gallery-item ${activeImage === index + 1 && 'is-reveal'}`}
      >
        <div className='gallery-item-info'>
          <h1 className='gallery-info-title'>{title}</h1>
          <h6 className='gallery-info-subtitle'>{subtitle}</h6>
          <p className='gallery-info-category'>{category}</p>
        </div>
        <div
          className={`gallery-item-image transition-all relative ${
            activeImage === index + 1 && 'is-reveal'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className='absolute inset-0 bg-[#000000]/20' />
        </div>
      </div>
      <div />
    </div>
  );
}
export default Gallery;
