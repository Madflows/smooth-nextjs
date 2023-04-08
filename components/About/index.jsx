import React from 'react';
import SectionHeader from '../SectionHeader';

function About() {
  return (
    <section className='about-section' data-scroll-section>
      <SectionHeader title={'About'} />
      <p id='headline'>
        Meg Griffin starts a blog called{' '}
        <span className='font-semibold'>Blooming Minds</span> about flowers and
        the designers who turn them into art. She believes that creativity and
        the art of making require dialogue and encourages her readers to share
        their thoughts and opinions.
      </p>
    </section>
  );
}

export default About;
