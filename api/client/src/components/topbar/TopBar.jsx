import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

function TopBar() {
  const PF = "http://localhost:5000/images/"
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }

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
            <li onClick={handleLogout} className="topListItem" >{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? (
          <Link to="/settings"><img 
              className="topImg"
              src={PF + user.profilePic} 
              alt="profile"
            /> 
          </Link>
          ) : 
          (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login" >LOGIN</Link>
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
