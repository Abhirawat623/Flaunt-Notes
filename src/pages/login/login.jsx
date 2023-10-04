import "./login.css";
import { Navbar } from "../../components/index";
export const Login = () => {
  return (
    <>
      
      <Navbar />
      <div className="login-container d-flex dir-col j-center a-center">
        <h2>Login</h2>
        <label className="d-flex dir-col j-center a-center">
            Email
            <input className="input-bar" type='text'/>
        </label>
        <label className="d-flex dir-col j-center a-center">
            Password
            <input className="input-bar" type='password'/>
        </label>
      </div>
    </>
  );
};
