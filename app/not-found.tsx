import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Something went wrong | Michal Ciberej',
  description: 'Personal website of Michal Ciberej',
};

const notFoundPage = () => {
  return (
    <main className='h-[100dvh] bg-backgroundD px-[4vw] md:px-[10vw] text-textD flex flex-col justify-between'>
      <header>
        <div className='pt-6'>
          <Link
            href='/'
            aria-label='back to homepage'
            className='group hover:text-primary transition-all flex items-center'>
            <IoIosArrowRoundBack className='text-4xl group-hover:-translate-x-2 md:group-hover:-translate-x-4 transition-transform' />
            <span className='text-xl md:text-2xl'>Back to homepage</span>
          </Link>
        </div>
      </header>
      <section>
        <div className='text-textD flex flex-col justify-center items-center'>
          <h1 className='text-7xl md:text-9xl bg-clip-text bg-gradient-to-tr from-primary to-secondary text-transparent'>
            OH NO
          </h1>
          <p className='text-xl md:text-2xl'>Something went wrong</p>
        </div>
      </section>
      <footer>
        <Footer white />
      </footer>
    </main>
  );
};

export default notFoundPage;
