import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(details);
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
