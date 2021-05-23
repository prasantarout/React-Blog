import "./contact.css"
// import { Link } from "react-router-dom";
export default function Contact() {
    return (
        <div className="contact">
            <span className="contactTitle">CONTACT US</span>
            <form className="contactForm">
            <label >Full Name</label>
                <input type="text" className="contactInput"placeholder="Enter full name.." />
                <label >Email</label>
                <input type="Email" className="contactInput"placeholder="Enter your email.." />
                <label >Address</label>
                <input type="text"className="contactInput"placeholder="Address Details.." />
                 <label >Messages</label>
             <textarea placeholder="tell your story.."type="text" className="contactMsg" ></textarea>
             <button className="contactButton">Message Us</button>
             
            </form>
            
                </div>
    )
}
