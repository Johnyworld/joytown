import { useNavigate } from 'react-router-dom';
import api from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './stores/userSlice';
import './Login.scss';

import useKakaoLogin from './hooks/useKakaoLogin';
import { logOut } from './stores/userSlice';
import LoginForm from './components/Login/LoginForm';
import Logo from './components/Login/Logo';
import LoginChannel from './components/Login/LoginChannel';
import LoginSNS from './components/Login/LoginSNS';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Logo />

      <LoginForm onSubmit={handler} />

      <LoginChannel />
      <LoginSNS onSubmit={(kakaoLogin, handleLogout)} />
    </div>
  );
}
