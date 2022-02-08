import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Join from './Join';
import Login from './Login';
import useKakaoLogin from './hooks/useKakaoLogin';

function App() {
  const userInfo = localStorage.getItem('userInfo');
  const user = userInfo ? JSON.parse(userInfo) : null;
  const kakaoLogin = useKakaoLogin();
  const logout = () => {
    localStorage.removeItem('userInfo');
    alert('로그아웃 됨');
  };
  return (
    <BrowserRouter>
      {user && (
        <p>
          {user.name}({user.email}) 유저 로그인 됨.
        </p>
      )}
      <Link to='/login'>로그인</Link>
      <Link to='/join'>회원가입</Link>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
      {user ? (
        <button type='button' onClick={logout}>
          로그아웃
        </button>
      ) : (
        <button type='button' onClick={kakaoLogin}>
          카카오 계정으로 계속
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
