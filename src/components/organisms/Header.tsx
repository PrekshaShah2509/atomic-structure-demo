// Author: Preksha Shah
// Header Organism Component
import React from 'react';

/**
 * Header organism - combines logo and search input group.
 * @returns {JSX.Element}
 */
const Header: React.FC = () => {
  return (
    <header className="header">
      <span className="header-title">React Atomic App</span>
    </header>
  );
};

export default Header; 