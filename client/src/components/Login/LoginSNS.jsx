import React from 'react';
import { useSelector } from 'react-redux';
import './LoginSNS.scss';

function LoginSNS({ onSubmit, onClickKakao }) {
  const user = useSelector(state => state.user.userInfo);
  const submitHandler = e => {
    e.preventDefault();
    console.log(user);
    onSubmit(user);
  };

  return (
    <div className='login-sns'>
      <p>
        <b>SNS계정으로 로그인하기</b>
      </p>
      <div className='btn-sns-wrap'>
        {user ? (
          <button type='button' onSubmit={submitHandler}>
            로그아웃
          </button>
        ) : (
          <div className='btn-sns'>
            <button type='button' onClick={() => {}}>
              <img className='img-sns' src={require('../../img/btn-naver.png')} />
            </button>
            <button type='button' onClick={onClickKakao}>
              <img className='img-sns' src={require('../../img/btn-kakao.png')} />
            </button>
            <button type='button' onClick={() => {}}>
              <img className='img-sns' src={require('../../img/btn-google.png')} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSNS;
