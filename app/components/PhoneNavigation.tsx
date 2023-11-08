'use client';

import { useState, SetStateAction, useLayoutEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useDelayUnmount from '../hooks/useDelayUnmount';
import Socials from './Socials';
import Link from 'next/link';
import Logo from './Logo';
import gsap from 'gsap';

interface PhoneNavigationProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<SetStateAction<boolean>>;
  handleMenuOpen: () => void;
}

const PhoneNavigation: React.FC<PhoneNavigationProps> = ({
  isOpened,
  setIsOpened,
  handleMenuOpen,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const shouldRender = useDelayUnmount(isOpened, 2000);

  const handleDisable = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };

  useLayoutEffect(() => {
    handleDisable();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(['.menu', '.menu-wrapper'], {
        scaleY: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'power2.inOut',
      });
      tl.from('.menu-links > li > a', {
        translateY: '100%',
        stagger: 0.2,
      });
      tl.from('.menu-other', { opacity: 0, duration: 0.8 }, '<');
    });

    return () => {
      ctx.revert();
    };
  }, [shouldRender]);

  useLayoutEffect(() => {
    if (!isOpened) {
      const menuAnimationExit = gsap.timeline();
      menuAnimationExit.fromTo(
        '.menu-other',
        { opacity: 1 },
        { opacity: 0, duration: 0.8 }
      );
      menuAnimationExit.fromTo(
        '.menu-links > li > a',
        { translateY: 0 },
        { translateY: '100%', stagger: 0.2 },
        '<'
      );
      menuAnimationExit.fromTo(
        ['.menu', '.menu-wrapper'],
        { scaleY: 1 },
        { scaleY: 0, duration: 1, stagger: 0.02, ease: 'power2.inOut' },
        0.9
      );
    }
  }, [isOpened]);

  const handleHomeScroll = (e: any) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#home');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  const handleAboutmeScroll = (e: any) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#aboutme');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  const handleProjectsScroll = (e: any) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#projects');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  const handleContactScroll = (e: any) => {
    e.preventDefault();
    setIsOpened(false);
    const element = document.querySelector('#contact');
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  return (
    <>
      {shouldRender && (
        <div
          className={`menu-wrapper origin-top fixed left-0 top-0 w-full h-[100dvh] bg-secondary z-50 scale-y-0`}>
          <div className='menu origin-top w-full h-full bg-primary px-10 py-6 scale-y-0 flex flex-col justify-between'>
            <div className='flex justify-between menu-other text-text'>
              <Link
                href={'/'}
                className='logo text-3xl'>
                <Logo />
              </Link>
              <button
                type='button'
                disabled={isDisabled}
                aria-label='close menu'
                onClick={handleMenuOpen}>
                <AiOutlineClose className='text-3xl' />
              </button>
            </div>
            <nav className='w-full flex items-center justify-center'>
              <ul className='group menu-links flex flex-col h-full justify-center items-center space-y-8 text-text'>
                <li className='overflow-hidden'>
                  <a
                    className='link text-4xl font-semibold group-hover:text-secondary hover:!text-text'
                    onClick={handleHomeScroll}
                    href='#home'>
                    Home
                  </a>
                </li>
                <li className='overflow-hidden'>
                  <a
                    className='link text-4xl font-semibold group-hover:text-secondary hover:!text-text'
                    onClick={handleAboutmeScroll}
                    href='#aboutme'>
                    About
                  </a>
                </li>
                <li className='overflow-hidden'>
                  <a
                    className='link text-4xl font-semibold group-hover:text-secondary hover:!text-text'
                    onClick={handleProjectsScroll}
                    href='#projects'>
                    Projects
                  </a>
                </li>
                <li className='overflow-hidden'>
                  <a
                    className='link text-4xl font-semibold group-hover:text-secondary hover:!text-text'
                    onClick={handleContactScroll}
                    href='#contact'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className='menu-other  flex justify-center'>
              <Socials
                column={false}
                black={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneNavigation;
