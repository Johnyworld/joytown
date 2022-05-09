import React from 'react';
import { Link } from 'react-router-dom';
import './LoginChannel.scss';

function LoginChannel() {
  return (
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
      {/* <Routes>
        <Route path='/login' element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default LoginChannel;
