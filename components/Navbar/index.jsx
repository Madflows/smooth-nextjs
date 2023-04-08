import React from 'react'

function Navbar() {
  return (
    <div
      className='flex justify-between py-[50px] text-[24px] tracking-[1px] text-black font-syncopate font-semibold uppercase'
      data-scroll-section
    >
      <div>menu</div>
      <div>Flirty Flowers</div>
      <div>cart</div>
    </div>
  );
}

export default Navbar
