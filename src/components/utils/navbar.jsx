import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"

function Navbar() {
    return <>
        {/* <div className="row">
            <div className="col-6">
                <div style={{ width: "100px", height: "35px", border: "1px solid pink" }}>
                    <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-popper-config='{"strategy":"fixed"}'>
                            Working
                        </button>
                        <ul className="dropdown-menu">
                            <li>Item #1</li>
                            <li>Item #2</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div>
                    <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Cut off
                        </button>
                        <ul className="dropdown-menu">
                            <li>Item #1</li>
                            <li>Item #2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
        <nav className="navbar shadow-sm py-0 mt-0" style={{ position: "fixed", zIndex: "999", backgroundColor: "#fff" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 px-2" style={{width:"100vw"}}>
                <div className="container-fluid py-0">
                    <Link className="navbar-brand mx-4 mt-0" to="/"><img src={logo} /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link active" aria-current="page" to="/secon_website">Home</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Products</Link>
                            </li>
                            <li className="nav-item dropdown text-uppercase overflow-visible">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-popper-config='{"strategy":"fixed"}' aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/services/Manufacturing">Manufacturing</Link></li>
                                    <li><Link className="dropdown-item" to="/services/Composite Repair">Composite Repair</Link></li>
                                    <li><Link className="dropdown-item" to="/services/GRP Lining">GRP Lining</Link></li>
                                    <li><Link className="dropdown-item" to="/services/GRP Piping">GRP Piping</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Projects</Link>
                            </li>
                            <li className="nav-item dropdown text-uppercase">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Market Sectors
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item text-uppercase">
                                <Link className="nav-link" to="#">Contact Us</Link>
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




