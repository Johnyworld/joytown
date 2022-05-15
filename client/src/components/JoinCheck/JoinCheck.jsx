import React from 'react';
import './JoinCheck.scss';
import { useNavigate } from 'react-router-dom';
import ButtonTest from '../Button';
import ImageIcon from '../ImageIcon/ImageIcon';

export default function JoinCheck() {
  let navigate = useNavigate();
  return (
    <div className='Joinckeck'>
      <div className='Joincheck-check'>
        <ImageIcon name={'check'} />
      </div>
      <div className='JoinCheck-message'>
        회원가입이 <br />
        완료되었습니다.
      </div>
      <div className='JoinCheck-subMessage'>
        열매마켓 관리자의 승인 후 <br />
        열매마켓 서비스 이용이 가능합니다.
        <br />
        <b>관리자의 승인을 기다려주세요.</b>
      </div>
      <ButtonTest
        onClick={() => {
          navigate('/Login');
        }}
        buttonSize='fixed'
      >
        로그인하러가기
      </ButtonTest>
    </div>
  );
}
