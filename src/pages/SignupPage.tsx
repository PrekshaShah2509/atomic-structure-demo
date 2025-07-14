// Author: Preksha Shah
// SignupPage Page Component
import React, { useState, useRef } from 'react';
import { Button } from '../components/atoms';
import { MainTemplate } from '../components/templates';

const LEVELS = [
  { key: 'atom', label: 'Atom' },
  { key: 'molecule', label: 'Molecule' },
  { key: 'organism', label: 'Organism' },
  { key: 'template', label: 'Template' },
  { key: 'page', label: 'Page' },
];

const EXPLANATIONS: Record<string, { title: string; items: string[] }> = {
  atom: {
    title: 'Atoms',
    items: [
      'Input: The basic text, email, and password fields',
      'Button: The Register, Google, and Facebook buttons',
      'Label: Field labels and section titles',
      'Checkbox: The Remember me checkbox',
      'Link: The Forgot password? link',
    ],
  },
  molecule: {
    title: 'Molecules',
    items: [
      'Input Group: Label + Input for each field',
      'Checkbox Group: Checkbox + Label',
      'Button Group: Google and Facebook buttons together',
      'Form Row: Input + spacing',
    ],
  },
  organism: {
    title: 'Organism',
    items: [
      'Registration Form: The entire form, combining all molecules into a functional block',
      'Social Login Area: The group of social login buttons',
    ],
  },
  template: {
    title: 'Template',
    items: [
      'Form Layout: The arrangement and alignment of the registration form within the page',
      'Spacing, centering, and background',
    ],
  },
  page: {
    title: 'Page',
    items: [
      'Full Screen: The complete registration page, including header, form, and all UI elements',
    ],
  },
};

/**
 * SignupPage - Three-column layout: left nav, center registration form, right text explanation. Uses full-width container for more space.
 * @returns {JSX.Element}
 */
const SignupPage: React.FC = () => {
  const [active, setActive] = useState<string>('page');
  const explanationRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (level: string) => {
    setActive(level);
    setTimeout(() => {
      explanationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  return (
    <MainTemplate>
      <h1 style={{ textAlign: 'center', marginBottom: 8 }}>Register</h1>
      <div
        style={{
          width: '100vw',
          maxWidth: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          padding: '0 0 40px 0',
          background: 'transparent',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 1400,
            margin: '0 auto',
            flexWrap: 'wrap',
            minHeight: 500,
          }}
        >
          {/* Left: Vertical Nav */}
          <nav
            style={{
              minWidth: 180,
              background: '#f1f5f9',
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: '36px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'center',
              fontWeight: 500,
              fontSize: 18,
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
            }}
          >
            {LEVELS.map((level) => (
              <button
                key={level.key}
                className="btn"
                style={{
                  background: active === level.key ? '#1d4ed8' : '#fff',
                  color: active === level.key ? '#fff' : '#2563eb',
                  width: 140,
                  border: active === level.key ? 'none' : '1px solid #2563eb',
                  boxShadow: active === level.key ? '0 2px 8px rgba(37,99,235,0.08)' : 'none',
                  marginBottom: 6,
                  fontSize: 18,
                  borderRadius: 8,
                }}
                onClick={() => handleNavClick(level.key)}
              >
                {level.label}
              </button>
            ))}
          </nav>
          {/* Center: Registration Form */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 480, display: 'flex', justifyContent: 'center' }}>
            <form
              className="section"
              style={{
                width: '100%',
                background: '#f8fafc',
                padding: 36,
                borderRadius: 18,
                boxShadow: '0 2px 24px rgba(0,0,0,0.09)',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <label style={{ fontWeight: 600, fontSize: 20, color: '#2563eb', marginBottom: 8 }}>Create your account</label>
              <input className="input" type="text" placeholder="Full Name" required style={{ width: '100%' }} />
              <input className="input" type="email" placeholder="Email" required style={{ width: '100%' }} />
              <input className="input" type="password" placeholder="Password" required style={{ width: '100%' }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 15 }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: 6 }} /> Remember me
                </label>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <Button type="submit" style={{ width: '100%', marginTop: 8, fontSize: 18, padding: '12px 0' }}>Register</Button>
              <div style={{ textAlign: 'center', margin: '10px 0', color: '#888', fontSize: 14 }}>or register with</div>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                <button type="button" className="btn" style={{ background: '#ea4335', minWidth: 120, fontSize: 16 }}>Google</button>
                <button type="button" className="btn" style={{ background: '#1877f3', minWidth: 120, fontSize: 16 }}>Facebook</button>
              </div>
            </form>
          </div>
          {/* Right: Explanation */}
          <div
            ref={explanationRef}
            style={{
              minWidth: 260,
              maxWidth: 400,
              background: '#f1f5f9',
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: 32,
              color: '#222',
              fontSize: 17,
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              marginTop: 0,
              flex: 1,
              alignSelf: 'stretch',
              height: 'fit-content',
            }}
          >
            <div style={{ fontWeight: 700, color: '#2563eb', fontSize: 20, marginBottom: 14 }}>{EXPLANATIONS[active].title}</div>
            <ul style={{ paddingLeft: 22, margin: 0 }}>
              {EXPLANATIONS[active].items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default SignupPage;
