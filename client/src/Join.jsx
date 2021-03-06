import { useNavigate } from 'react-router-dom';
import api from './utils/api';
import './Join.scss';
import JoinForm from './components/Join/JoinForm';
import NavibarClose from './components/NavibarClose';

export default function Join({ onSubmit }) {
  const navigate = useNavigate();

  const handler = async (email, password) => {
    const { ok, message, data } = await api.회원가입({ email, password });
    if (!ok) alert(message);
    else {
      alert('잘 됐어요~!', data);

      navigate(`/login?email=${data.email}`);
    }
  };

  return (
    <div className='join'>
      <NavibarClose />
      <div className='join-wrap'>
        <div className='title'>회원가입</div>
        <JoinForm onSubmit={handler} />
      </div>
    </div>
  );
}
