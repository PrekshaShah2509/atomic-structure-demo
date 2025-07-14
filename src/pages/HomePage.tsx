// Author: Preksha Shah
// HomePage Page Component
import React from 'react';
import { MainTemplate } from '../components/templates';
import { Button } from '../components/atoms';
import { InputGroup } from '../components/molecules';
import { Header } from '../components/organisms';

/**
 * HomePage - sample page composed of all Atomic Design levels, with clear sectioning.
 * @returns {JSX.Element}
 */
const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <h1>Welcome to Atomic Design Example</h1>

      {/* Atom Section */}
      <div className="section">
        <div className="section-label">Atom: Button</div>
        <Button>Click Me</Button>
      </div>

      {/* Molecule Section */}
      <div className="section">
        <div className="section-label">Molecule: InputGroup</div>
        <InputGroup placeholder="Type something..." />
      </div>

      {/* Organism Section */}
      <div className="section">
        <div className="section-label">Organism: Header</div>
        <Header />
      </div>

      {/* Template Section */}
      <div className="section">
        <div className="section-label">Template: MainTemplate</div>
        <div style={{background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.04)', padding: 12}}>
          <Header />
          <div style={{padding: 16, textAlign: 'center'}}>This is the content area of the template.</div>
        </div>
      </div>

      {/* Page Section */}
      <div className="section">
        <div className="section-label">Page: HomePage (All Together)</div>
        <p>This page demonstrates composition from <b>atom</b> → <b>molecule</b> → <b>organism</b> → <b>template</b> → <b>page</b>.</p>
      </div>
    </MainTemplate>
  );
};

export default HomePage; 