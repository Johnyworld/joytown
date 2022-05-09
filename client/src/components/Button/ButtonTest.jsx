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
  // 버튼 사이즈 클래스 네임이 사이즈인 경우
  const buttonSizeClassName = 'btn--' + buttonSize;

  // outline 인 경우 border, color : "c-COLOR",
  // solid 인 경우 background 만 : "bgc-COLOR", "bc-COLOR"
  const buttonStyleClassName =
    buttonStyle === 'solid' ? 'btn--solid--' + buttonColor : `c-${buttonColor}`;

  return (
    <button
      className={`btn ${buttonSizeClassName} ${buttonStyleClassName}`} //클래스 3개 들어가 있는 거 (띄어쓰기 체크!)
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};


//버튼 컴포넌트 어떤 형식의 스타일 항목이 있는지 
ButtonTest.propTypes = {
  buttonStyle: PropTypes.oneOf(['solid', 'outline']),
  buttonColor: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large', 'fixed']),
  onClick: PropTypes.func,
};


//기본 컴포넌트 스타일이 뭔지
ButtonTest.defaultProps = {
  buttonStyle: 'solid',
  buttonColor: 'primary',
  buttonSize: 'medium',
};

export default ButtonTest;
