import SectionHeading from '../SectionHeading';
import SkillSlider from '../SkillSlider';
import Socials from '../Socials';

const AboutMe = () => {
  return (
    <section id='about'>
      <div className='flex flex-col items-start text-textD border-t border-secondary'>
        <SectionHeading num='01'>About</SectionHeading>
        <div className='mb-20 md:px-10 flex flex-col md:flex-row w-full justify-between items-end gap-8'>
          <div className='space-y-8 flex flex-col'>
            <h3 className='text-2xl'>
              Hi there, I&#39;m Michal, a self-taught web developer.
            </h3>
            <p className='text-lg max-w-prose text-textD/80 tracking-wide'>
              In 2022, I decided to kickstart my online business and needed a
              website to showcase and sell my products. Although I initially
              created websites using platforms like WordPress, I soon realized
              the importance of coding. This led me to embark on a journey to
              learn how to build websites and applications from scratch.
            </p>
            <p className='text-lg max-w-prose text-textD/80 tracking-wide'>
              Currently, my focus is on enhancing my skills with technologies
              such as
              <span className='text-primary/50'> Next.js</span>,
              <span className='text-primary/50'> Typescript</span>, and
              incorporating animation libraries like
              <span className='text-primary/50'> GSAP</span> or
              <span className='text-primary/50'> Framer Motion</span>.
              Additionally, I&#39;m delving into backend topics like databases
              and authentication to round out my skill set.
            </p>
          </div>
          <Socials />
        </div>
        <SkillSlider />
      </div>
    </section>
  );
};

export default AboutMe;
