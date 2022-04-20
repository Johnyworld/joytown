import React from 'react';
import './JoinForm.scss';
import { useState } from 'react';
import ButtonTest from '../Button/ButtonTest';

function JoinForm({ onSubmit }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '', repassword: '' });
  const [isChecked, setIsChecked] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    onSubmit(details.name, details.email, details.password, details.repassword);
  };

  var 체크 = ['[필수] 이용약관동의', '[필수] 개인정보 처리방침 동의'];

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

      <div className='join-checkbox-wrap'>
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
              width='12'
              height='8'
              viewBox='0 0 12 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='checkbox-active'
                d='M4.51097 8C4.31343 7.9992 4.12413 7.92346 3.98388 7.78911L0.218962 4.153C0.0787183 4.01675 0 3.83244 0 3.64031C0 3.44819 0.0787183 3.26388 0.218962 3.12762C0.288962 3.05946 0.372243 3.00536 0.464001 2.96844C0.555759 2.93152 0.654178 2.91251 0.753581 2.91251C0.852984 2.91251 0.951403 2.93152 1.04316 2.96844C1.13492 3.00536 1.2182 3.05946 1.2882 3.12762L4.51097 6.24013L10.7156 0.21147C10.8566 0.0760249 11.0475 0 11.2464 0C11.4453 0 11.6362 0.0760249 11.7773 0.21147C11.8478 0.279075 11.9039 0.359506 11.9421 0.448125C11.9803 0.536743 12 0.631795 12 0.727797C12 0.823799 11.9803 0.91885 11.9421 1.00747C11.9039 1.09609 11.8478 1.17652 11.7773 1.24412L5.00041 7.78911C4.86957 7.915 4.69538 7.99005 4.51097 8Z'
                fill='#C6C6C6'
              />
            </svg>
          </span>
          모두 동의
        </label>
        {체크.map(function (a) {
          return (
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
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='check-active'
                    d='M4.51097 8C4.31343 7.9992 4.12413 7.92346 3.98388 7.78911L0.218962 4.153C0.0787183 4.01675 0 3.83244 0 3.64031C0 3.44819 0.0787183 3.26388 0.218962 3.12762C0.288962 3.05946 0.372243 3.00536 0.464001 2.96844C0.555759 2.93152 0.654178 2.91251 0.753581 2.91251C0.852984 2.91251 0.951403 2.93152 1.04316 2.96844C1.13492 3.00536 1.2182 3.05946 1.2882 3.12762L4.51097 6.24013L10.7156 0.21147C10.8566 0.0760249 11.0475 0 11.2464 0C11.4453 0 11.6362 0.0760249 11.7773 0.21147C11.8478 0.279075 11.9039 0.359506 11.9421 0.448125C11.9803 0.536743 12 0.631795 12 0.727797C12 0.823799 11.9803 0.91885 11.9421 1.00747C11.9039 1.09609 11.8478 1.17652 11.7773 1.24412L5.00041 7.78911C4.86957 7.915 4.69538 7.99005 4.51097 8Z'
                    fill='#C6C6C6'
                  />
                </svg>
              </span>
              {a}
            </label>
          );
        })}
      </div>

      <ButtonTest type='submit' buttonColor='primary' buttonSize='fixed' buttonStyle='solid'>
        가입하기
      </ButtonTest>
    </form>
  );
}

export default JoinForm;
