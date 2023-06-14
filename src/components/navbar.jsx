import logo from "../assets/logo.svg"
import search from "../assets/search.svg"

function Navbar() {
    return <>
        <nav className="navbar shadow-sm py-0" style={{ position: "fixed", zIndex: "999" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 px-2" style={{ width: "100vw" }}>
                <div className="container-fluid py-0">
                    <a className="navbar-brand me-5" href="#"><img src={logo} /></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Market Sectors
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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