import React from 'react';
import './JoinForm.scss';
import { useState } from 'react';

function JoinForm({ onSubmit }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    onSubmit(details.name, details.email, details.password);
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
          name='password'
          id='password'
          onChange={e => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          placeholder='비밀번호를 한번더 입력해주세요.'
        />
      </div>
      <input type='submit' value='가입하기' className='btn-fixed' />
    </form>
  );
}

export default JoinForm;
