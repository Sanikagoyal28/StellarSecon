import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import "./nav.css"

function Nav() {
    return <>
        <div className="navbar">
            <div className="logo"><Link to="/secon_website">
                <img src={logo} />
            </Link></div>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About Us</Link>
                    </li>
                    <li>
                        <Link href="#" id="product">Products +</Link>
                        <ul className="nav_dropdown">
                            <li><Link to="">Fires and Safety</Link></li>
                            <li><Link to="">Pipes</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">Services</Link>
                    </li>
                    <li>
                        <Link href="#">Projects</Link>
                    </li>
                    <li>
                        <Link href="#">Market Sectors</Link>
                    </li>
                    <li>
                        <Link href="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Nav;