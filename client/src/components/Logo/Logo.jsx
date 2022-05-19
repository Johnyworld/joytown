import React from 'react';
import './Logo.scss';
import PropTypes from 'prop-types';

function Logo({ logoSize, textSize }) {
  const LogoSizeClassName = `Logo--` + logoSize;
  const LogoTextClassName = `LogoText--` + textSize;

  return (
    <div className='logo-wrap'>
      <div className='logo'>
        <svg
          className={`${LogoSizeClassName}`}
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M30 0C13.4182 0 0 13.4182 0 30C0 46.5818 13.4182 60 30 60C46.5818 60 60 46.5818 60 30C60 13.4182 46.5818 0 30 0ZM30 51.8182C20.1273 51.8182 12 44.3182 11.0182 34.7182C10.9091 33.6545 11.7 32.7273 12.7636 32.7273H47.2364C48.3 32.7273 49.0909 33.6545 48.9818 34.7182C47.9727 44.3182 39.8727 51.8182 30 51.8182Z'
            fill='#079C28'
          />
        </svg>
        <p className={`LogoText ${LogoTextClassName}`}>Joy Town</p>
      </div>
    </div>
  );
}

Logo.propTypes = {
  logoSize: PropTypes.oneOf(['small', 'default', 'large']),
  textSize: PropTypes.oneOf(['small', 'default', 'large']),
};

Logo.defaultProps = {
  logoSize: 'default',
  textSize: 'default',
};

export default Logo;
