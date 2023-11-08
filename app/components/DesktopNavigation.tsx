import NavLinkButton from './buttons/NavLinkButton';
import { useCurrentSection } from '../hooks/useCurrentSection';

const DesktopNavigation = () => {
  const currentSection = useCurrentSection();

  return (
    <nav className='hidden lg:block'>
      <ul
        className='
        navbar-element
        opacity-0
        fixed
        top-0
        right-0
        mr-[7vw]
        flex 
        items-start
        text-3xl
        z-50
        mix-blend-difference
        pt-8
        ml-auto
        brightness-110'>
        <li>
          <NavLinkButton
            link='#home'
            currentSection={currentSection}
            id='home'>
            Home
          </NavLinkButton>
        </li>
        <li>
          <NavLinkButton
            link='#about'
            currentSection={currentSection}
            id='about'>
            About
          </NavLinkButton>
        </li>
        <li>
          <NavLinkButton
            link='#projects'
            currentSection={currentSection}
            id='projects'>
            Projects
          </NavLinkButton>
        </li>
        <li>
          <NavLinkButton
            link='#contact'
            currentSection={currentSection}
            id='contact'>
            Contact
          </NavLinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
