import React from 'react';
import './Input.css';

const Input = props => {
  const inputType = props.type || 'text';
  return (
    <div className="Input">
      <input
        placeholder={props.label}
        type={inputType}
        {...props.field}
      />
    </div>
  );
};

export default Input;