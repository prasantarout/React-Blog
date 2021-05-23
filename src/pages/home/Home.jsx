import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Contact from "../../components/contact/Contact";
// import About from "../../components/about/About";
// import Contactus from "../contactus/Contactus";

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
            
            </div>
            <div className="home">
            <Contact/>
            
            </div>
            {/* <div className="home">
            <About/>
            </div> */}
        </>
    )
}
