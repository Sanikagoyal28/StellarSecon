import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import search from "../assets/search.svg"

function Navbar() {

    const navigate = useNavigate()
    return <>
        <nav className="navbar shadow-sm py-0" style={{ position: "fixed", zIndex: "999", backgroundColor:"#fff" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 px-2" style={{ width: "100vw" }}>
                <div className="container-fluid py-0">
                    <Link className="navbar-brand mx-4 mt-0" to="/"><img src={logo} /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">About Us</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Products</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="/services/Manufacturing">Services</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Projects</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown text-uppercase">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Market Sectors
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex ms-0">
                            <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn ms-0" type="submit"><img src={search} width="28px" /></button>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>

    </>
}

export default Navbar