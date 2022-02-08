import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    // axios.post("/api/user", details).then((res) => console.log(res));
    const { ok, message, data } = await api.로그인(details);
    if (!ok) alert(message);
    else {
      alert("잘 됐어요~!", data);
      navigate(`/login?email=${data.email}`);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Welcome, Joytown</h2>
      <div className="form-group">
        <label htmlFor="email">E-mail : </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">PassWord : </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="로그인" />
    </form>
  );
}
