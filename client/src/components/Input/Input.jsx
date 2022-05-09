import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import { useState } from 'react';

const Input = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = e => {
    setFocused(true);
  };
  return (
    <div className='formInput'>
      <label className='join-input-text'>{label}</label>
      <input
        className='input-line'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
};

Input.propTypes = {
  InputStyle: PropTypes.oneOf(['face', 'border', 'bottomline']),
  InputColor: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'success']),
  InputSize: PropTypes.oneOf(['small', 'medium', 'large', 'fixed']),
  onClick: PropTypes.func,
};

//기본 컴포넌트 스타일이 뭔지
Input.defaultProps = {
  InputStyl: 'bottomline',
  InputColor: 'default',
  InputSize: 'medium',
};

export default Input;
