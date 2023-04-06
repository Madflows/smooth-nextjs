import React from 'react';
import SectionHeader from '../SectionHeader';

function About() {
  return (
    <section className='about-section'>
      <SectionHeader title={"About"} />
      <p id='headline'>
        Meg Griffin starts a blog called{' '}
        <span className='font-semibold'>Blooming Minds</span> about flowers and
        the designers who turn them into art. She believes that creativity and
        the art of making require dialogue and encourages her readers to share
        their thoughts and opinions. Like the Flirty Flowers blog, Meg&apos;s
        goal is to inspire and encourage her readers to appreciate the art of
        floral design. She values art, insight, and opinion, and hopes to create
        a community of like-minded individuals who share her passion for
        flowers. As her blog gains popularity, Meg becomes known as a leading
        voice in the world of floral design, showcasing the talents of both
        established and up-and-coming designers. Her blog becomes a go-to
        resource for anyone looking to learn more about flowers and the art of
        arranging them.
      </p>
    </section>
  );
}

export default About;
