import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Join from './Join';
import Login from './Login';
import useKakaoLogin from './hooks/useKakaoLogin';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './stores/userSlice';
import './App.scss';
import JoinCheck from './components/JoinCheck/JoinCheck';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userInfo);
  const kakaoLogin = useKakaoLogin();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className='App'>
      {' '}
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
          <Route path='/JoinCheck' element={<JoinCheck />} />
        </Routes>
        {/* {user ? (
          <button type='button' onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <button type='button' onClick={kakaoLogin}>
            카카오 계정으로 계속
          </button>
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
