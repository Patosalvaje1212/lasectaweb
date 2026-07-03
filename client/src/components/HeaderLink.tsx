import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  children: React.ReactNode;
  isSpecial?: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, children, isSpecial = false }) => {
  const baseClass = "text-xl lg:text-2xl font-display tracking-wide transition-colors";
  const colorClass = isSpecial 
    ? "text-theme-main hover:text-white font-medium" 
    : "text-white hover:text-theme-main";

  return (
    <Link to={to} className={`${baseClass} ${colorClass}`}>
      {children}
    </Link>
  );
};

export default HeaderLink;
