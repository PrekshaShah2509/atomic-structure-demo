// Author: Preksha Shah
// Button Atom Component
import React from 'react';

/**
 * Button atom - the most basic interactive element.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Button props
 * @returns {JSX.Element}
 */
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button; 