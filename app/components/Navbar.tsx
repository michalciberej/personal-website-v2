'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import DesktopNavigation from './DesktopNavigation';
import PhoneNavigation from './PhoneNavigation';
import Logo from './Logo';
import Link from 'next/link';
import { useCurrentWindowSize } from '../hooks/useCurrentWindowSize';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { width } = useCurrentWindowSize();
  const isDesktop = width > 767;
  const home = usePathname();

  const handleHomeScroll = (e: any) => {
    e.preventDefault();
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className='bg-backgroundD flex'>
      {home === '/' ? (
        <Link
          href={'/'}
          className='fixed top-0 left-0 pt-6 ml-[7vw] mix-blend-difference z-50 text-3xl outline-none focus:scale-125 hover:scale-125 transition-transform logo text-textD brightness-125'>
          <Logo />
        </Link>
      ) : (
        <a
          href='#home'
          className='fixed top-0 left-0 pt-6 ml-[7vw] mix-blend-difference z-50 text-3xl outline-none focus:scale-125 hover:scale-125 transition-transform logo text-textD brightness-125'
          onClick={handleHomeScroll}>
          <Logo />
        </a>
      )}

      {isDesktop ? (
        <DesktopNavigation />
      ) : (
        <button
          type='button'
          aria-label='menu'
          onClick={handleMenuOpen}
          className='fixed top-0 right-0 pt-6 mr-[7vw] mix-blend-difference z-50 text-textD text-4xl'>
          <AiOutlineMenu />
        </button>
      )}

      {!isDesktop && (
        <PhoneNavigation
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          handleMenuOpen={handleMenuOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
