import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register Here!</span>
            <form className="registerForm">
            <label >Full Name</label>
                <input type="text" className="registerInput"placeholder="Enter full name.." />
                <label >Email</label>
                <input type="Email" className="registerInput"placeholder="Enter your email.." />
                <label >Password</label>
                <input type="password"className="registerInput"placeholder="Enter password.." />
                <button className="registerButton">Register</button>
               
            </form>
            <button className="registerLoginButton">
                <Link  className="link" to="/login">Login</Link></button>

        </div>
    )
}