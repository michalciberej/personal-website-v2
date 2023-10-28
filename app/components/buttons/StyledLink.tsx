import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { StyledLinkProps } from '@/typings';
import clsx from 'clsx';
import './buttonStyles.css';

const StyledLink: React.FC<StyledLinkProps> = ({
  link,
  currentSection,
  id,
  icon,
  black,
  border,
  target,
  children,
}) => {
  return (
    <Link
      href={link}
      target="{{target ? '_blank' : '_self'}}"
      className={clsx(
        `
        group
        link
        duration-300
        space-x-1
        min-w-fit
        py-2
        px-2`,
        border && 'border',
        black ? 'border-backgroundD' : 'border-background',
        currentSection === id ? 'link active' : 'link'
      )}>
      <span className='mask'>
        <div className='link-container'>
          <span className={`link-title1 title`}>{children}</span>
          <span className={`link-title2 title`}>{children}</span>
        </div>
      </span>
      {icon && (
        <HiArrowUpRight
          className={`
          transition-transform
          text-xl
          duration-300
          group-hover:rotate-45
          group-focus-visible:rotate-45`}
        />
      )}
    </Link>
  );
};

export default StyledLink;
