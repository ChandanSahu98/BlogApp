import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async ()=> {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  })

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
            className=""
            src="https://images.unsplash.com/photo-1633876841461-772d2b0b0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=531&q=80"
            alt=""
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolore eum doloribus veniam voluptas ab adipisci nam recusandae, deleniti culpa veritatis fuga modi blanditiis quaerat possimus accusamus ratione sapiente pariatur?</p>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => 
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          )}
        </ul>
      </div>
      <div className="sidebarItem"></div>
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
    </div>
  )
}
