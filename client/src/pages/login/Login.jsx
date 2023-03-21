import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Email" className="loginInput"/>
            <label>Password</label>
            <input type="password" placeholder="Password" className="loginInput"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
