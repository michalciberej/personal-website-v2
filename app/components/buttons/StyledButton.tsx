'use client';

import { HiArrowUpRight } from 'react-icons/hi2';
import { StyledButtonProps } from '@/typings';
import clsx from 'clsx';
import './buttonStyles.css';

const StyledButton: React.FC<StyledButtonProps> = ({
  submit,
  black,
  func,
  children,
  border,
  icon,
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={clsx(
        `group
        link
        flex
        items-center
        space-x-1
        max-w-fit
        duration-300
        py-2
        px-2`,
        border && 'border',
        black ? 'border-backgroundD' : 'border-textD',
        black ? 'text-text' : 'text-textD'
      )}
      onClick={func}>
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
    </button>
  );
};

export default StyledButton;
