import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label>Username</label>
            <input type="text" placeholder="Enter Your Username" className="registerInput"/>
            <label>Email</label>
            <input type="text" placeholder="Enter Your Email" className="registerInput"/>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" className="registerInput"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registeLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}
