import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './stores/userSlice';
import './Login.scss';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import useKakaoLogin from './hooks/useKakaoLogin';
import { logOut } from './stores/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: '', password: '' });

  const user = useSelector(state => state.user.userInfo);
  const kakaoLogin = useKakaoLogin();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const submitHandler = async e => {
    e.preventDefault();
    const { ok, message, data } = await api.로그인(details);
    if (!ok) alert(message);
    else {
      alert('잘 됐어요~!', data);

      navigate(`/login?email=${data.email}`);
      dispatch(setUser(data));
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <form onSubmit={submitHandler} className='Login'>
      <h2>
        YULMAE<br></br> MARKET
      </h2>
      <div className='form-wrap'>
        <div className='form-group'>
          <label htmlFor='email'> </label>
          <input
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
      <div className='login-route'>
        <Link to='/join' className='text-link'>
          회원가입
        </Link>
        <p>|</p>
        <Link to='' className='text-link'>
          아이디찾기
        </Link>
        <p>|</p>
        <Link to='' className='text-link'>
          비밀번호찾기
        </Link>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <div className='login-sns'>
        <p>
          <b>SNS계정으로 로그인하기</b>
        </p>
        <div className='btn-sns-wrap'>
          {user ? (
            <button type='button' onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <div className='btn-sns'>
              <button type='button' onClick={() => {}}>
                <img className='img-sns' src={require('./img/btn-naver.png')} />
              </button>
              <button type='button' onClick={kakaoLogin}>
                <img className='img-sns' src={require('./img/btn-kakao.png')} />
              </button>
              <button type='button' onClick={() => {}}>
                <img className='img-sns' src={require('./img/btn-google.png')} />
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
