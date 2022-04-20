import React from 'react';
import PropTypes from 'prop-types';
import './ButtonTest.scss';

// const STYLES = [
//   'btn--primary--solid',
//   'btn--warning--solid',
//   'btn--danger--solid',
//   'btn--success--solid',
//   'btn--primary--outline',
//   'btn--warning--outline',
//   'btn--danger--outline',
//   'btn--success--outline',
// ];

// const SIZE = ['btn--medium', 'btn--small'];

const ButtonTest = ({ children, type, onClick, buttonStyle, buttonColor, buttonSize }) => {
  const buttonSizeClassName = 'btn--' + buttonSize;

  // outline 인 경우 border, color : "c-COLOR",
  // solid 인 경우 background 만 : "bgc-COLOR", "bc-COLOR"
  const buttonStyleClassName =
    buttonStyle === 'solid' ? 'btn--solid--' + buttonColor : `c-${buttonColor}`;

  return (
    <button
      className={`btn ${buttonSizeClassName} ${buttonStyleClassName}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

ButtonTest.propTypes = {
  buttonStyle: PropTypes.oneOf(['solid', 'outline']),
  buttonColor: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large', 'fixed']),
  onClick: PropTypes.func,
};

ButtonTest.defaultProps = {
  buttonStyle: 'solid',
  buttonColor: 'primary',
  buttonSize: 'medium',
};

export default ButtonTest;
