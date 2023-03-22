import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=> {
    try{
      e.preventDefault();
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    }
    catch(err){
      setError(true);
    }
  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text" 
              placeholder="Enter Your Username" 
              className="registerInput"
              onChange={e => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
              type="text" 
              placeholder="Enter Your Email" 
              className="registerInput"
              onChange={e => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Your Password" 
              className="registerInput"
              onChange={e => setPassword(e.target.value)}
            />
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registeLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
        {error && <span style={{color:"red", marginTop:"3px", fontWeight:"400", fontSize:"20px"}}>Something went wrong! </span>}
    </div>
  )
}
