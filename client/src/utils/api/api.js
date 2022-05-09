import request from "./request";

/**
 * 모든 API 요청을 여기서 관리합니다.
 * 어떤 parameter를 받고 어떤 값을 return 받는지 한 눈에 파악할 수 있습니다.
 * 성공적으로 API response를 받았을 때 data에 포함되는 타입은 await request<Here> 에 지정합니다.
 */
const api = {
  로그인: async ({ email, password }) =>
    await request("POST", "/api/auth/", { email, password }),
  회원가입: async ({ email, name, password }) =>
    await request("POST", "/api/user/", { name, email, password }),
};

export default api;
