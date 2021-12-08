import "./navbar.scss";
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    {/* <a href="#intro" className="logo"> add logo in the future
                        <img src="" alt="" />
                    </a> */ }
                    <div className="itemContainer">
                        <a className="icon" href="https://github.com/eliglezz" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a className="icon" href="https://www.linkedin.com/in/eliezer-gonzalez-206/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span>glez.eliezer@gmail.com</span>
                    </div>
                    {/* <div className="itemContainer">
                        <PhoneIphone className="icon" /> unsure about phone #
                        <span>206-458-2839</span>
                    </div> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}