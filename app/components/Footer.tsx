'use client';

import Link from 'next/link';
import Logo from './Logo';

const Footer = ({ white }: { white?: boolean }) => {
  const handleHomeScroll = (e: any) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`
      flex
      space-y-1
      justify-center
      items-center
      flex-col
      bg-transparent
      pt-4
      ${white ? 'text-textD' : 'text-text'}`}>
      <Link
        href={'#home'}
        onClick={handleHomeScroll}
        className='
        outline-none
        focus:scale-125
        hover:scale-125
        transition-transform
        logo
        text-3xl'>
        <Logo full />
      </Link>
      <p
        className={`
      ${white ? 'text-textD/50' : 'text-text/50'}
      text-md
      text-center
      pb-1`}>
        Created by me @2023
      </p>
    </div>
  );
};

export default Footer;
