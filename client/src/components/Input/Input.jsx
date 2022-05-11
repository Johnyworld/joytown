import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = props => {
  const { label, errorMessage, isError, name, value, type, placeholder, comment, onChange } = props;

  return (
    <div className={'input'}>
      {label && <label className={`input__label`}>{label}</label>}
      {comment && <div className={`input__commnet`}>{comment}</div>}
      <input
        name={name}
        className={`input-input ${isError ? 'input-input--error' : ''}`}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {isError && <span className='errorMessage'>{errorMessage}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'date']),
  onChange: PropTypes.func,
};

//기본 컴포넌트 스타일이 뭔지
Input.defaultProps = {};

export default Input;
