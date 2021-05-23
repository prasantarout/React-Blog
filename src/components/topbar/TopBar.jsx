import {  Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user=false;
    return (
        <div className="top">
          <div className="topLeft">
          <div className="headerTitle">
                <span className="headerTitlelg">EARTHTOURS</span>
            </div>
          </div>
          <div className="topCenter">
            <ul className="topList">
                <li  className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                 <li className="topListItem"> <Link className="link" to="/setting">UPDATE</Link></li>
                <li className="topListItem"> <Link className="link" to="/write">POST</Link></li>
                <li className="topListItem"> <Link className="link" to="/contactus">CONTACT</Link></li>
                <li className="topListItem"> 
                { user && "LOGOUT" }
                </li>
            </ul>
            </div>
              <div className="topRight">
                  {
                      user ? (
                        <img className="topImg"src="/images/women.jpeg" alt="" />
                      ) : (
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
                 
                  <i className="topSearch fas fa-search"></i>
              </div>
         </div>
    )
}
