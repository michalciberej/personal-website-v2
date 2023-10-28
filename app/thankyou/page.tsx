import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { LuHeartHandshake } from 'react-icons/lu';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you | Michal Ciberej',
  description: 'Personal website of Michal Ciberej',
};

const ThankYouPage = () => {
  return (
    <main className='h-[100dvh] bg-backgroundD px-[10vw] text-textD flex flex-col justify-between'>
      <header>
        <div className='pt-6'>
          <Link
            href='/'
            aria-label='back to homepage'
            className='group hover:text-primary transition-all flex items-center'>
            <IoIosArrowRoundBack className='text-4xl group-hover:-translate-x-4 transition-transform' />
            <span className='text-2xl'>Back to homepage</span>
          </Link>
        </div>
      </header>
      <section>
        <div className='flex flex-col items-center justify-center text-3xl -mt-10 space-y-4'>
          <LuHeartHandshake className='text-6xl text-primary' />
          <h1>Thank you for reaching out.</h1>
          <p className='text-xl'>Will get to you as soon as possible.</p>
        </div>
      </section>
      <footer>
        <Footer white />
      </footer>
    </main>
  );
};

export default ThankYouPage;
