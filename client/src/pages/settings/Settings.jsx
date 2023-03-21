import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeletTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        className="settingsImg"
                        src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label >Username</label>
                <input type="text" placeholder="example_name"/>
                <label >Email</label>
                <input type="email" placeholder="example@xyz.com"/>
                <label >Password</label>
                <input type="password" placeholder="Password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
