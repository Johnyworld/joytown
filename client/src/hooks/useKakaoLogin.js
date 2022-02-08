import axios from 'axios';
import { useCallback } from 'react';

const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
const { Kakao } = window;
Kakao.init(KAKAO_JS_KEY);
Kakao.isInitialized();

export default function useKakaoLogin() {
  const { Kakao } = window;

  const signIn = useCallback(() => {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'; // 서버에 CSFR 토큰을 넘겨야 함.
    Kakao.Auth.login({
      // scope: 'profile',
      fail: err => {
        alert(err);
      },
      success: res => {
        const { access_token } = res;
        Kakao.Auth.setAccessToken(access_token);
        // const csrftoken = Cookies.get('csrftoken');
        axios
          .post('/api/auth/kakao/', { access_token })
          .then(res => {
            console.log('SUCCESS', res);
            if (res.data) {
              localStorage.setItem('userInfo', JSON.stringify(res.data));
            }
          })
          .catch(err => {
            alert(err);
          });
      },
    });
  }, [Kakao]);

  return signIn;
}
