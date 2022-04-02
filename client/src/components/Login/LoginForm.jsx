import React from 'react';
import { useState } from 'react';
import './LoginForm.scss';

function LoginForm({ onSubmit }) {
  const [details, setDetails] = useState({ email: '', password: '' });
  const [isChecked, setIsChecked] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    onSubmit(details.email, details.password);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-wrap'>
        <div className='form-group'>
          <label htmlFor='email'> </label>
          <input
            className='input-box'
            type='email'
            name='email'
            id='email'
            onChange={e => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            placeholder='아이디(이메일)'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input
            className='input-box'
            type='password'
            name='password'
            id='password'
            onChange={e => setDetails({ ...details, password: e.target.value })}
            value={details.password}
            placeholder='비밀번호'
          />
        </div>
        <label className='login-checkbox'>
          <input
            checked={true}
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
            // This element is purely decorative so
            // we hide it for screen readers
            aria-hidden='true'
            viewBox='0 0 15 10'
            // fill='none'
          >
            <svg
              width='15'
              height='10'
              viewBox='0 0 15 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 4L6 9L14 1' stroke='#C6C6C6' />
            </svg>
          </span>
          로그인 상태유지
        </label>
      </div>
      <input type='submit' value='로그인' className='btn-login' />
    </form>
  );
}

export default LoginForm;
