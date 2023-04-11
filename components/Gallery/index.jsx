import { GALLERY_IMAGES } from '@/data/photos';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import React, { useEffect, useRef, useState } from 'react';

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'center center',
          scrub: 0.5,
          pin: true,
          markers: true
        },
      }
    );

    

    // let sections = gsap.utils.toArray('.gallery-item-wrapper');

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.gallery',
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     end: () => '+=' + galleryRef.current.offsetWidth,
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <div ref={triggerRef}>
      <section className='section-wrapper gallery-wrap'>
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
            />
          ))}
        </div>
      </section>
    </div>
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
