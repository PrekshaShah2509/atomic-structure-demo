// Author: Preksha Shah
// Tooltip Atom Component
import React, { useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Tooltip atom - shows a label and description on hover.
 * @param {object} props
 * @param {ReactNode} props.children - The element to wrap
 * @param {string} props.label - The Atomic Design level
 * @param {string} props.description - The explanation to show
 */
const Tooltip: React.FC<{ children: ReactNode; label: string; description: string }> = ({ children, label, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <span
          style={{
            position: 'absolute',
            zIndex: 10,
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: 8,
            background: '#222',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: 8,
            fontSize: 13,
            minWidth: 180,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            whiteSpace: 'pre-line',
            pointerEvents: 'none',
          }}
        >
          <b style={{ color: '#4f8cff' }}>{label}</b>
          <div style={{ marginTop: 4 }}>{description}</div>
        </span>
      )}
    </span>
  );
};

export default Tooltip; 