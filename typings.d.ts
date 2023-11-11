type Links = {
  title: string;
  link: string;
};

export interface ProjectProps {
  thumbnail: string;
  header: string;
  alt: string;
  description: string;
  techs: string;
  left: boolean;
  links: Links[];
}

export interface StyledLinkProps {
  link: string;
  currentSection?: string;
  id?: string;
  icon?: boolean;
  black?: boolean;
  border?: boolean;
  target?: boolean;
  children: string;
}

export interface StyledButtonProps {
  submit?: boolean;
  black?: boolean;
  border?: boolean;
  func?: (e: any) => void;
  children: string;
  icon?: boolean;
  disabled?: boolean;
}
