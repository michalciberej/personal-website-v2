import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Something went wrong | Michal Ciberej',
  description: 'Personal website of Michal Ciberej',
};

const notFoundPage = () => {
  return (
    <main>
      <section>
        <div className='h-[100dvh] bg-backgroundD text-textD flex flex-col justify-center items-center'>
          <h1 className='text-9xl bg-clip-text bg-gradient-to-tr from-primary to-secondary text-transparent'>
            OH NO
          </h1>
          <p className='text-2xl'>Something went wrong</p>
        </div>
      </section>
    </main>
  );
};

export default notFoundPage;
