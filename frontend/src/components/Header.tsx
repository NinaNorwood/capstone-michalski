import {Link} from "react-router-dom";
import {useState} from "react";
import SideBar from "./Sidebar";
import "../styles/Header.css";

export default function Header(){

    const [sidebar, setSidebar] = useState(false)

    return(
        <div className="header">
                <img onClick={() => setSidebar(!sidebar)} className="sidebarSymbol" src={process.env.PUBLIC_URL + "/drawer.png"} alt="drawer"/>
            {sidebar &&
                <nav className="openSidebar">
                    <img onClick={() => setSidebar(!sidebar)} className="sidebarSymbolOpen" src={process.env.PUBLIC_URL + "/drawer.png"} alt="drawer"/>
                    <SideBar/>
                </nav>}
            <Link to="/" className="Title-header">
                <img className="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
            </Link>
            <img className="sidebarSymbolHidden" src={process.env.PUBLIC_URL + "/drawer.png"} alt="drawer"/>
        </div>
    )
}