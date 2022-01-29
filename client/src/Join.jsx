import { useState } from "react";
import axios from "axios";

export default function Join() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/api/user", details).then((res) => console.log(res));
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>회원가입</h2>
      <div className="form-group">
        <label htmlFor="name">Name : </label>
        <input
          type="name"
          name="name"
          id="name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
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
      <input type="submit" value="회원가입하기" />
    </form>
  );
}
