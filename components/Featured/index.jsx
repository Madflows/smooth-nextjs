import photos from '@/data/photos';
import React from 'react';

function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className='featured-section'>
      <div className='featured-row-layout'>
        <h6>green</h6>
        <img src={firstUrl} alt='wahala' />
      </div>
      <div className='featured-column-layout'>
        <h6>lily</h6>
        <img src={secondUrl} alt='Bread' />
      </div>
    </section>
  );
}

export default Featured;
