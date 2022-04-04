import React from 'react';
import './JoinForm.scss';
import { useState } from 'react';

function JoinForm({ onSubmit }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '', repassword: '' });
  const [isChecked, setIsChecked] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    onSubmit(details.name, details.email, details.password, details.repassword);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group-line'>
        <label htmlFor='name' className='join-input-text'>
          이름{' '}
        </label>
        <input
          className='input-line'
          type='name'
          name='name'
          id='name'
          onChange={e => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          placeholder='본인 이름을 입력해주세요.'
        />
      </div>
      <div className='form-group-line'>
        <label htmlFor='email' className='join-input-text'>
          아이디{' '}
        </label>
        <input
          className='input-line'
          type='email'
          name='email'
          id='email'
          onChange={e => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          placeholder='아이디(이메일)'
        />
      </div>
      <div className='form-group-line'>
        <label htmlFor='email' className='join-input-text'>
          비밀번호{' '}
        </label>
        <input
          className='input-line'
          type='password'
          name='password'
          id='password'
          onChange={e => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          placeholder='비밀번호 입력'
        />
        <input
          className='input-line-repeat'
          type='password'
          name='repassword'
          id='repassword'
          onChange={e => setDetails({ ...details, repassword: e.target.value })}
          value={details.repassword}
          placeholder='비밀번호를 한번더 입력해주세요.'
        />
      </div>

      <div>
        <label className='join-checkbox'>
          <input
            checked={true}
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
            aria-hidden='true'
            viewBox='0 0 15 10'
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
          모두 동의
        </label>
        <label className='join-check'>
          <input
            checked={true}
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
            aria-hidden='true'
            viewBox='0 0 15 10'
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
          [필수] 이용약관 동의
        </label>
        <label className='join-check'>
          <input
            checked={true}
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
            aria-hidden='true'
            viewBox='0 0 15 10'
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
          [필수] 개인정보 처리방침 동의
        </label>
      </div>

      <input type='submit' value='가입하기' className='btn-fixed' />
    </form>
  );
}

export default JoinForm;
