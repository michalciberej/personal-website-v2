'use client';
import Image from 'next/image';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-title', {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        ease: 'power3.ease',
      });

      gsap.to('.hero-image', {
        opacity: 1,
        ease: 'power3.ease',
        duration: 0.7,
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section id='home'>
      <div className='flex flex-col text-textD mx-auto justify-center items-center h-[100dvh] relative'>
        <Image
          src={'/lines.svg'}
          alt='Picture of abstract lines'
          width={500}
          height={500}
          className='hero-image absolute opacity-0 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] w-full rotate-90 mr-20 lg:mr-60'
        />
        <div className='overflow-hidden -translate-x-20 lg:-translate-x-64'>
          <div className='hero-title relative translate-y-full opacity-0 z-50 font-light tracking-wide dark:text-textD text-6xl sm:text-7xl md:text-8xl lg:text-9xl '>
            Michal
          </div>
        </div>
        <div className='overflow-hidden -translate-x-10 lg:-translate-x-40'>
          <div className='hero-title relative translate-y-full z-50 font-light tracking-wide dark:text-textD text-6xl sm:text-7xl md:text-8xl lg:text-9xl pb-2'>
            Ciberej
          </div>
        </div>
        <div className='overflow-hidden translate-x-6 lg:translate-x-0'>
          <div className='hero-title relative translate-y-full z-50 font-semibold tracking-wide dark:text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl md:-mb-4 text-primary'>
            Web
          </div>
        </div>
        <div className='overflow-hidden translate-x-4 lg:translate-x-20'>
          <div className='hero-title relative translate-y-full z-50 font-semibold tracking-wide dark:text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary'>
            Developer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
