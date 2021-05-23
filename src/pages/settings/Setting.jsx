import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingProfilePicture">
                        <img src="/images/women.jpeg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingPP far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="john dee" />
                    <label>Email</label>
                    <input type="Email" placeholder="earthtour@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
            
        </div>
    )
}
