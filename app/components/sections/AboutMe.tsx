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
              Hello there, I am Michal and I am self-thought web deveveloper.
            </h3>
            <p className='text-lg max-w-prose text-textD/80 tracking-wide'>
              In 2022 decided to start online business. I needed a website to
              sell my products. After I created many websites with platforms
              like WordPress I decided to learn how to code. So I can create
              websites or applications from the ground up.
            </p>
            <p className='text-lg max-w-prose text-textD/80 tracking-wide'>
              I am currently focusing to improve my skills with
              <span className='text-primary/50'> NextJS</span>,
              <span className='text-primary/50'> Typescript</span>, animation
              libraries like <span className='text-primary/50'> GSAP</span> or
              <span className='text-primary/50'> Framer Motion</span> and more
              backend related topics like databases or authentication.
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
