import { Link } from "react-router-dom";
import "./topbar.css"

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? (<img 
              className="topImg"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
              alt="profile"
            /> 
          ) : 
          (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>

    </div>
  )
}

export default TopBar
