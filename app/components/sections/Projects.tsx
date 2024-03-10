import SectionHeading from '../SectionHeading';
import Project from '../Project';
import React from 'react';

const projects = [
  {
    thumbnail: '/progenda.png',
    header: 'Progenda',
    alt: 'Picture of project - Progenda',
    description:
      'To-do List app where all data is stored in database. Users can authenticate with credentials or with Github or Google account. Users can also create, update and delete tasks and lists, set theme or update account settings. ',
    techs:
      'Next.js, Typescript, TailwindCSS, MongoDB, Prisma, Next-Auth.js and more',
    left: true,
    links: [
      {
        title: 'GitHub',
        link: 'https://github.com/michalciberej/progenda',
      },
      {
        title: 'Live Demo',
        link: 'https://progenda.vercel.app/',
      },
    ],
  },
  {
    thumbnail: '/ecommerce-website.png',
    header: 'Ecommerce Website',
    alt: 'Picture of project - ecommerce website',
    description:
      'Modern ecommerce website focused on fashion. Products are fetched from database and stored in cache. Order data is sent to database on order completion.',
    techs: 'Next.js, Typescript, TailwindCSS and Appwrite',
    left: false,
    links: [
      {
        title: 'GitHub',
        link: 'https://github.com/michalciberej/nextjs-ecommerce',
      },
      {
        title: 'Live Demo',
        link: 'https://nextjs-ecommerce-five-chi.vercel.app/',
      },
    ],
  },
  {
    thumbnail: '/custom-video-player.png',
    header: 'Custom Video Player',
    alt: 'Picture of project - custom video player',
    description:
      'Custom video player with all functionalities you would expect. Possible to upload own video to watch.',
    techs: 'Next.js, Typescript and TailwindCSS',
    left: true,
    links: [
      {
        title: 'GitHub',
        link: 'https://github.com/michalciberej/custom-video-player',
      },
      {
        title: 'Live Demo',
        link: 'https://custom-video-player-weld.vercel.app/',
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id='projects'>
      <div className='flex flex-col items-start md:pb-40'>
        <SectionHeading num='02'>Projects</SectionHeading>
        <div className='flex flex-col pl-0 lg:px-12 w-full py-8 space-y-20 md:space-y-40'>
          {projects.map((project, index) => (
            <Project
              key={index}
              thumbnail={project.thumbnail}
              header={project.header}
              alt={project.alt}
              techs={project.techs}
              description={project.description}
              left={project.left}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
