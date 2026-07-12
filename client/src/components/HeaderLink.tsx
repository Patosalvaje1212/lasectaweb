import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  children: React.ReactNode;
  isSpecial?: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, children, isSpecial = false }) => {
  const baseClass = "text-xl lg:text-2xl font-display tracking-wide transition-colors relative py-1";

  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => {
        if (isSpecial) {
          return `${baseClass} text-theme-main font-medium hover:text-white ${
            isActive ? "underline underline-offset-4 decoration-2 decoration-theme-main" : ""
          }`;
        }
        return `${baseClass} ${
          isActive 
            ? "text-theme-main font-medium" 
            : "text-white hover:text-theme-main"
        }`;
      }}
    >
      {children}
    </NavLink>
  );
};

export default HeaderLink;
