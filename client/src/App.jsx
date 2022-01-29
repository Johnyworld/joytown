import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Link to="/login">로그인</Link>
      <Link to="/join">회원가입</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
