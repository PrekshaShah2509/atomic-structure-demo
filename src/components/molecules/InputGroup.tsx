// Author: Preksha Shah
// InputGroup Molecule Component
import React from 'react';
import { Button } from '../atoms';

/**
 * InputGroup molecule - combines input and button.
 * @param {object} props
 * @param {string} props.placeholder - Placeholder for the input
 * @returns {JSX.Element}
 */
const InputGroup: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  return (
    <div className="input-group">
      <input
        className="input"
        placeholder={placeholder}
        type="text"
      />
      <Button>Submit</Button>
    </div>
  );
};

export default InputGroup; 