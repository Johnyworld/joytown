import React from 'react';
import './JoinForm.scss';
import { useState } from 'react';
import ButtonTest from '../Button/ButtonTest';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../../Login';

function JoinForm({ onSubmit }) {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    birthday: '',
    address: '',
    phoneNumber: '',
  });
  const [isChecked, setIsChecked] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    onSubmit(
      details.name,
      details.email,
      details.password,
      details.repassword,
      details.address,
      details.birthday,
      details.phoneNumber,
    );
  };

  var 체크 = ['[필수] 이용약관동의', '[필수] 개인정보 처리방침 동의'];

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
  }); //이렇게 했을때, 계속해서 기입할때마다 재랜더링이 된다.

  const [errors, setErrors] = useState([]);

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'ex)홍길동',
      label: '이름',
      errorMessage: '본인 이름을 적어주세요.',
      required: true,
      pattern: /[가-힣]{2,7}/,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'ex)123@naver.com',
      label: '이메일',
      errorMessage: '이메일 주소로 입력해주세요.',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      placeholder: '비밀번호를 입력해주세요.',
      label: '비밀번호',
      comment: '영문대소문자, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.',
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
      errorMessage: '영문, 숫자,를 포함한 8자 이상의 비밀번호를 입력해주세요.',
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'text',
      placeholder: '비밀번호를 한 번 더 입력해주세요.',
      label: '비밀번호 확인',
      errorMessage: '같은 비밀번호를 입력해주세요!',
      required: true,
    },
    {
      id: 5,
      name: 'phoneNumber',
      type: 'number',
      placeholder: 'ex)01012345678',
      label: '핸드폰 번호',
      comment: '핸드폰이 없을 시, 보호자 번호를 입력해주세요.',
      pattern: /[0-9]{10,11}/,
      errorMessage: '숫자만 입력해주세요.',
      required: true,
    },
    {
      id: 6,
      name: 'birthday',
      type: 'date',
      placeholder: '생년월일을 선택해주세요.',
      label: '생년월일',
    },
    {
      id: 7,
      name: 'address',
      type: 'text',
      placeholder: 'ex)다산로32,남산타운 제 2상가 3층 301호',
      label: '주소',
      comment: '도로명 주소와 상세주소를 입력해주세요.',
    },
  ];

  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  const onChange = e => {
    const targetName = e.target.name;
    setValues({ ...values, [targetName]: e.target.value });
    const item = inputs.find(item => item.name === e.target.name);

    const isInvalid = item?.pattern && !item?.pattern?.test(e.target.value);
    const isErrorConfirmPassword =
      targetName === 'confirmPassword' && e.target.value !== values.password;

    if (isInvalid || isErrorConfirmPassword) {
      if (!errors.includes(targetName)) {
        setErrors([...errors, targetName]);
      }
    } else {
      setErrors(errors.filter(err => err !== targetName));
    }
  };

  console.log(errors);

  return (
    <form onSubmit={submitHandler}>
      {inputs.map(input => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          isError={errors.includes(input.name)}
          errorMessage={input.errorMessage}
        />
      ))}

      <div className='join-checkbox-wrap'>
        <label className='join-checkbox'>
          <input
            checked={true}
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
            aria-hidden='true'
            viewBox='0 0 15 10'
          >
            <svg
              width='12'
              height='8'
              viewBox='0 0 12 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='checkbox-active'
                d='M4.51097 8C4.31343 7.9992 4.12413 7.92346 3.98388 7.78911L0.218962 4.153C0.0787183 4.01675 0 3.83244 0 3.64031C0 3.44819 0.0787183 3.26388 0.218962 3.12762C0.288962 3.05946 0.372243 3.00536 0.464001 2.96844C0.555759 2.93152 0.654178 2.91251 0.753581 2.91251C0.852984 2.91251 0.951403 2.93152 1.04316 2.96844C1.13492 3.00536 1.2182 3.05946 1.2882 3.12762L4.51097 6.24013L10.7156 0.21147C10.8566 0.0760249 11.0475 0 11.2464 0C11.4453 0 11.6362 0.0760249 11.7773 0.21147C11.8478 0.279075 11.9039 0.359506 11.9421 0.448125C11.9803 0.536743 12 0.631795 12 0.727797C12 0.823799 11.9803 0.91885 11.9421 1.00747C11.9039 1.09609 11.8478 1.17652 11.7773 1.24412L5.00041 7.78911C4.86957 7.915 4.69538 7.99005 4.51097 8Z'
                fill='#C6C6C6'
              />
            </svg>
          </span>
          모두 동의
        </label>
        {체크.map(function (a) {
          return (
            <label className='join-check'>
              <input
                checked={true}
                type='checkbox'
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <span
                className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
                aria-hidden='true'
                viewBox='0 0 15 10'
              >
                <svg
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='check-active'
                    d='M4.51097 8C4.31343 7.9992 4.12413 7.92346 3.98388 7.78911L0.218962 4.153C0.0787183 4.01675 0 3.83244 0 3.64031C0 3.44819 0.0787183 3.26388 0.218962 3.12762C0.288962 3.05946 0.372243 3.00536 0.464001 2.96844C0.555759 2.93152 0.654178 2.91251 0.753581 2.91251C0.852984 2.91251 0.951403 2.93152 1.04316 2.96844C1.13492 3.00536 1.2182 3.05946 1.2882 3.12762L4.51097 6.24013L10.7156 0.21147C10.8566 0.0760249 11.0475 0 11.2464 0C11.4453 0 11.6362 0.0760249 11.7773 0.21147C11.8478 0.279075 11.9039 0.359506 11.9421 0.448125C11.9803 0.536743 12 0.631795 12 0.727797C12 0.823799 11.9803 0.91885 11.9421 1.00747C11.9039 1.09609 11.8478 1.17652 11.7773 1.24412L5.00041 7.78911C4.86957 7.915 4.69538 7.99005 4.51097 8Z'
                    fill='#C6C6C6'
                  />
                </svg>
              </span>
              {a}
            </label>
          );
        })}
      </div>

      <ButtonTest type='submit' buttonColor='primary' buttonSize='large' buttonStyle='solid'>
        가입하기
      </ButtonTest>

      <div className='join-not'>
        <p>이미 아이디가 있으신가요?</p>
        <Link to='/login'>로그인</Link>
      </div>
    </form>
  );
}

export default JoinForm;
