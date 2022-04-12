import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, size, label }) => {
  return (
    <button type='button' className='storybook-button'>
      {label}
    </button>
  );
};

export default Button;
