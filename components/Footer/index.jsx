import React from 'react';
import SectionHeader from '../SectionHeader';

function Footer() {
  return (
    <section className='footer'>
      <SectionHeader title={'Made in'} />
      <h1 className='location' id='location-text'>
        Lagos, Nigeria
      </h1>
    </section>
  );
}

export default Footer;
