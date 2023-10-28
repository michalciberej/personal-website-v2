import clsx from 'clsx';
import { Yellowtail } from 'next/font/google';

const yellowtail = Yellowtail({ weight: ['400'], subsets: ['latin'] });

const Logo = ({ full }: { full?: boolean }) => {
  return <p className={clsx(yellowtail.className)}>{full ? 'Michal' : 'M'}</p>;
};

export default Logo;
