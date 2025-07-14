// Author: Preksha Shah
// MainTemplate Template Component
import React from 'react';
import { Header } from '../organisms';

/**
 * MainTemplate - page layout with header and content area.
 * @param {object} props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element}
 */
const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainTemplate; 