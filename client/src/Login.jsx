import { useNavigate } from 'react-router-dom';
import api from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './stores/userSlice';
import './Login.scss';
import { Route, Routes, Link } from 'react-router-dom';
import useKakaoLogin from './hooks/useKakaoLogin';
import { logOut } from './stores/userSlice';
import LoginForm from './components/LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user.userInfo);
  const kakaoLogin = useKakaoLogin();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const handler = async (email, password) => {
    const { ok, message, data } = await api.로그인({ email, password });
    if (!ok) alert(message);
    else {
      alert('잘 됐어요~!', data);

      navigate(`/login?email=${data.email}`);
      dispatch(setUser(data));
    }
  };

  return (
    <div className='Login'>
      <h2>
        YULMAE<br></br> MARKET
      </h2>

      <LoginForm onSubmit={handler} />

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
    </div>
  );
}
