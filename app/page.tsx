'use client';

import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useCurrentWindowSize } from '@/app/hooks/useCurrentWindowSize';
import { useLayoutEffect } from 'react';

const Home = () => {
  const { width } = useCurrentWindowSize();
  const isDesktop = width > 767;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set('body', { backgroundColor: '#F6D15A' });
      // PROJECT PARALLAX
      gsap.utils.toArray('.project-info').forEach((info: any) => {
        gsap.set(info, {
          y: isDesktop ? '30%' : '-30%',
        });

        gsap.to(info, {
          scrollTrigger: {
            trigger: info,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.2,
          },
          y: isDesktop ? '-15%' : '-10%',
        });
      });
      gsap.utils.toArray('.project-border').forEach((border: any) => {
        gsap.set(border, {
          y: isDesktop ? '-5%' : '-5%',
        });

        gsap.to(border, {
          scrollTrigger: {
            trigger: border,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.2,
          },
          y: isDesktop ? '5%' : '5%',
        });
      });
      // WEBSITE SHRINK
      gsap.set('#contact', { opacity: 0 });
      gsap.to('#contact', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'center+=200 bottom',
          end: '+=100',
          scrub: true,
        },
        opacity: 1,
      });

      gsap.to('.home', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'center+=150 bottom',
          end: '+=300',
          scrub: true,
        },
        scaleX: isDesktop ? 0.9 : 0.95,
        scaleY: isDesktop ? 0.93 : 0.97,
        boxShadow: '1px 3px 15px #242424',
      });
    });

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <>
      <main>
        <header>
          <Navbar />
        </header>
        <div className='home bg-backgroundD px-[4vw] md:px-[10vw]'>
          <Hero />
          <AboutMe />
          <Projects />
        </div>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
