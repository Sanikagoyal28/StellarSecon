import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons"

function Navbar() {

    return <>
        <div className="wrapper shadow-sm">
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label for="show-menu" className="menu-icon"><FontAwesomeIcon icon={faBars} color="#000" /></label>
                <div className="content">
                    <div className="logo"><Link to="/secon_website">
                        <img src={logo} />
                    </Link></div>
                    <ul className="links">
                        <li><Link to="/secon_website">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <Link className="desktop-link">Products</Link>
                            <input type="checkbox" id="show-features" />
                            <label for="show-features">Products</label>
                            <ul>
                                <li><Link to="#">Enclosures</Link></li>
                                <li><Link to="#">Fire and Safety</Link></li>
                                <li><Link to="#">Instrumentation</Link></li>
                                <li><Link to="#">Roofing Products</Link></li>
                                <li><Link to="#">Road and Infrastructures</Link></li>
                                <li>
                                    <Link className="desktop-link">More Items</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label for="show-items">More Items</label>
                                    <ul>
                                        <li><Link to="#">Architectural Features</Link></li>
                                        <li><Link to="#">Planters</Link></li>
                                        <li><Link to="#">Bespoke</Link></li>
                                        <li><Link to="#">Pultruded Products</Link></li>
                                        <li><Link to="#">Resins and Fibres</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="desktop-link">Services</Link>
                            <input type="checkbox" id="show-services" />
                            <label for="show-services">Services</label>
                            <ul>
                                <li><Link to="/services/Manufacturing">Manufacturing</Link></li>
                                <li><Link to="/services/Composite Repair">Composite Repair</Link></li>
                                <li><Link to="/services/GRP Lining">GRP Lining</Link></li>
                                <li><Link to="/services/GRP Piping">GRP Piping</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#" className="desktop-link">Projects</Link>
                            <input type="checkbox" id="show-projects" />
                            <label for="show-projects">Projects</label>
                            <ul>
                                <li><Link to="#">Umm Al Houl Power</Link></li>
                                <li><Link to="#">Red Line - South</Link></li>
                                <li><Link to="#">Al Bayt Stadium</Link></li>
                                <li><Link to="#">Mockup Steel Shades</Link></li>
                                <li><Link to="#">Corniche park walkway</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="desktop-link">Market Sectors</Link>
                            <input type="checkbox" id="show-sectors" />
                            <label for="show-sectors">Market Sectors</label>
                            <ul>
                                <li><Link to="/sectors/Oil and Gas">Oil and Gas</Link></li>
                                <li><Link to="/sectors/Renewable Energy">Renewable Energy</Link></li>
                                <li><Link to="/sectors/Road and Infrastructure">Road and Infrastructure</Link></li>
                                <li><Link to="/sectors/Fire and Safety">Fire and Safety</Link></li>
                                <li><Link to="/sectors/Electrical and Instrumentation">Electrical / Instrumentation</Link></li>
                                <li><Link to="/sectors/Facility Management">Facility Management</Link></li>
                                <li>
                                    <Link to="#" className="desktop-link">More Items</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label for="show-items">More Items</label>
                                    <ul>
                                        <li><Link to="/sectors/Utilities and Sewage">Utilities / Sewage</Link></li>
                                        <li><Link to="/sectors/Storage and Transportation">Storage / Transportation</Link></li>
                                        <li><Link to="/sectors/Marine and Automobiles">Marine / Automobile</Link></li>
                                        <li><Link to="/sectors/Industrial Complex">Industrial Complex</Link></li>
                                        <li><Link to="/sectors/Architectural and Landscaping">Architectural and Landscaping</Link></li>
                                        <li><Link to="/sectors/Events, Signage and Fit-out">Events, Signage and Fit-out</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="#">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
}


export default Navbar


// <FontAwesomeIcon icon={faCaretDown} />