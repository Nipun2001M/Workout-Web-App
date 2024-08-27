import { useState } from "react";
import { UseLogin } from "../hooks/UseLogin";
const Login = () => {
    const {login,error,loading} =UseLogin()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    await login(email,password)
  };

  return (
    <form className="login" onSubmit={handlesubmit}>
      <h3>login</h3>
      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>

      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button disabled={loading}>login</button>
      {error && <div className="error">{error.message}</div>}
    </form>
  );
};
export default Login;
