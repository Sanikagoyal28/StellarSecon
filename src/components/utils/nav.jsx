import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import "./nav.css"

function Nav() {
    return <>
        <div className="navbar">

            <div className="nav_menu">
                <div className="logo"><Link to="/secon_website">
                    <img src={logo} />
                </Link></div>
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
                            <li>Fires and Safety</li>
                            <li>Pipes</li>
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