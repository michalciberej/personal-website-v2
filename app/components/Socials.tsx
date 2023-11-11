import clsx from 'clsx';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const links = [
  {
    link: 'https://www.github.com/michalciberej',
    label: 'Link to my Github account',
    icon: AiFillGithub,
  },
  {
    link: 'https://www.linkedin.com/in/michal-ciberej-a1b235247/',
    label: 'Link to my Linkedin account',
    icon: AiFillLinkedin,
  },
];

const Socials = ({ column, black }: { column?: boolean; black?: boolean }) => {
  return (
    <div
      className={clsx(
        'flex',
        black ? 'text-text' : 'text-textD',
        column ? 'flex-col space-y-5 pt-1' : 'flex-row space-x-4'
      )}>
      {links.map((link, index) => (
        <Social
          key={index}
          href={link.link}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

const Social = ({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: string;
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={label}
      className='
      text-4xl
      outline-none
      transition-transform
      hover:scale-150
      focus-visible:scale-150'>
      <Icon />
    </a>
  );
};

export default Socials;
