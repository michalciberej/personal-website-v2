'use client';

import Image from 'next/image';
import StyledLink from './buttons/StyledLink';
import { ProjectProps } from '@/typings';

const Project: React.FC<ProjectProps> = ({
  thumbnail,
  alt,
  header,
  description,
  techs,
  links,
  left,
}) => {
  return (
    <>
      {left && (
        <div className='flex relative flex-col md:flex-row mr-auto'>
          <div
            className='
              mx-auto
              relative
              w-full
              h-full
              max-w-[80vw]
              md:max-w-[40vw]
              lg:max-w-[50vw]
              xl:max-w-[35vw]'>
            <Image
              src={thumbnail}
              alt={alt}
              width={960}
              height={870}
              priority
              className='
              brightness-75
              w-full
              relative
              z-30'
            />
            <div
              className='
              translate-x-4
              project-border
              border-2
              bg-secondary/10
              border-secondary
              absolute
              inset-0'
            />
          </div>
          <div
            className='
                project-info
                flex
                flex-col
                justify-center
                lg:-ml-10
                w-full
                min-w-[350px]
                md:max-w-sm
                lg:max-w-md
                xl:max-w-xl
                z-50'>
            <h3 className='text-2xl text-text ml-4 bg-primary -mb-2 relative z-50 max-w-fit px-4 py-1'>
              {header}
            </h3>
            <div className='bg-textD p-6 shadow-xl flex space-x-4'>
              <div className='flex flex-col space-y-4'>
                <p className='md:text-md lg:text-lg text-text/90 border-b pb-3'>
                  {description}
                </p>
                <p className='text-text/90 space-y-2'>
                  Built with <span>{techs}</span>
                </p>
                <div className='flex space-x-4 justify-end bg-textD'>
                  {links.map((el, index) => (
                    <StyledLink
                      black={true}
                      icon={true}
                      border={true}
                      key={index}
                      link={el.link}
                      currentSection={'#'}
                      id={'!'}>
                      {el.title}
                    </StyledLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!left && (
        <div className='flex relative flex-col-reverse md:flex-row ml-auto'>
          <div
            className='
                project-info
                flex
                flex-col
                justify-center
                lg:-mr-10
                w-full
                min-w-[350px]
                md:max-w-sm
                lg:max-w-md
                xl:max-w-xl
                z-50'>
            <h3 className='text-2xl text-text mr-4 bg-primary -mb-2 place-self-end relative z-50 max-w-fit px-4 py-1'>
              {header}
            </h3>
            <div className='bg-textD p-6 shadow-xl flex break-words space-x-4'>
              <div className='flex flex-col space-y-4'>
                <p className='md:text-md lg:text-lg text-text/90 border-b pb-3'>
                  {description}
                </p>
                <p className='text-text/90 space-y-2 py-2'>
                  Built with <span>{techs}</span>
                </p>
                <div className='flex space-x-4 justify-start bg-textD'>
                  {links.map((el, index) => (
                    <StyledLink
                      black={true}
                      icon={true}
                      border={true}
                      key={index}
                      link={el.link}
                      currentSection={'#'}
                      id={'!'}>
                      {el.title}
                    </StyledLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className='
              mx-auto
              relative
              w-full
              h-full
              max-w-[80vw]
              md:max-w-[40vw]
              lg:max-w-[50vw]
              xl:max-w-[35vw]'>
            <Image
              src={thumbnail}
              alt={alt}
              width={960}
              height={870}
              priority
              className='
              brightness-75
              w-full
              relative
              z-30'
            />
            <div
              className='
              -translate-x-4
              project-border
              border-2
              bg-secondary/10
              border-secondary
              absolute
              inset-0'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
