import React from 'react';
import './Select.css';

const Select = props => {
  return (
    <div className="Select">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={props.onChange}
      >
        {
          props.options.map((name, index) => (
            <option key={index} value={index}>{name}</option>
          ))}
        }
      </select>
    </div>
  );
};

export default Select;