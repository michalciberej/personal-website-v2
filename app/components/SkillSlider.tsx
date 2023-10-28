'use client';

import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoGit,
  BiLogoNodejs,
} from 'react-icons/bi';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const skills = [
  {
    title: 'React',
    icon: BiLogoReact,
  },
  {
    title: 'NextJS',
    icon: SiNextdotjs,
  },
  {
    title: 'TailwindCSS',
    icon: SiTailwindcss,
  },
  {
    title: 'Sass',
    icon: FaSass,
  },
  {
    title: 'MongoDB',
    icon: BiLogoMongodb,
  },
  {
    title: 'JavaScript',
    icon: BiLogoJavascript,
  },
  {
    title: 'TypeScript',
    icon: BiLogoTypescript,
  },
  {
    title: 'Git',
    icon: BiLogoGit,
  },
  {
    title: 'NodeJS',
    icon: BiLogoNodejs,
  },
];

const SkillSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 10000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='flex space-x-2 w-full'>
      <button
        type='button'
        aria-label='previous'
        onClick={scrollPrev}
        className='px-2'>
        <IoIosArrowBack />
      </button>
      <div
        className='overflow-hidden'
        ref={emblaRef}>
        <ul className='flex space-x-4 first:pl-4'>
          {skills.map((skill, index) => (
            <Skill
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              index={index + 1}
            />
          ))}
        </ul>
      </div>
      <button
        type='button'
        aria-label='next'
        onClick={scrollNext}
        className='px-2'>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const Skill = ({
  title,
  icon: Icon,
  index,
}: {
  title: string;
  icon: string;
  index: number;
}) => {
  return (
    <li
      className='
      relative
      py-6
      flex
      flex-col
      items-center
      justify-between
      space-y-2
      border
      border-dashed
      border-secondary
      min-w-[14.3rem]'>
      <span className='text-4xl'>
        <Icon />
      </span>
      <span>{title}</span>
      <span
        className='place-self-end absolute bottom-2 right-3 text-xs'
        aria-hidden>
        {index}
      </span>
    </li>
  );
};

export default SkillSlider;
