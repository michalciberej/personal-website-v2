'use client';

import clsx from 'clsx';
import './buttonStyles.css';

interface NavLinkButtonProps {
  link: string;
  currentSection: string;
  id: string;
  children: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  link,
  currentSection,
  id,
  children,
}) => {
  const handleScrollTo = (e: any, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <a
      href={link}
      onClick={(e) => handleScrollTo(e, link)}
      target="{{target ? '_blank' : '_self'}}"
      className={clsx(
        `
        navbar-element
        group
        link
        max-w-fit
        duration-300
        space-x-1
        text-textD
        py-2
        px-2`,
        currentSection === id ? 'link active' : 'link'
      )}>
      <span className='mask'>
        <div className='link-container'>
          <span className='link-title1 title'>{children}</span>
          <span className='link-title2 title'>{children}</span>
        </div>
      </span>
    </a>
  );
};

export default NavLinkButton;
