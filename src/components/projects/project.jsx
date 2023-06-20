import Carousel from "../utils/carousel"
import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import img1 from "../../assets/image.jpg"
import arrow from "../../assets/arrow.svg"

function Project() {
    return <>
        <Navbar />
        <div className="container py-5" style={{ marginTop: "70px" }} >
            <div className="fitContent mb-n3">
                <h2 className="slideText heading mb-0" >Umm Al Houl Power (UHP)</h2>
                <div className="underline" />
            </div>
            <Carousel image={img1} />

            <div className="row my-4 d-flex justify-content-center align-items-center">
                <div className="col-md-2">
                    <div className="card shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{height:"190px", background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Project Title</h5>
                        <h6>Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{height:"190px", background: "radial-gradient(#adacac, #dc7a84, #a03931)" }}>
                        <h5>Client</h5>
                        <h6>Supreme committee for delivery & legacy</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{height:"190px", background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Scope</h5>
                        <h6>Design, Engineering, Manufacture & Installation of GRP Works</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{height:"190px", background: "radial-gradient(#adacac, #dc7a84, #a03931)" }}>
                        <h5>Year</h5>
                        <h6>2018</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{height:"190px", background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Status</h5>
                        <h6>Completed</h6>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <img className="me-3" src={arrow} width="22px" />
                <div className="ms-md-4 ms-sm-4 mt-n4">
                    <h4 className="overflow-hidden">Description</h4>
                    <p className="overflow-hidden">
                        Umm Al Houl Combined Cycle Power Plant is part of Qatar’s biggest power and water projects, located in the Qatar Economic Zone 3, south of the capital city of Doha. The power plant will be able to supply up to 2.52GW of electricity and 590,000m³ (136 million gallons) of drinking water a day to 2.5m homes in the area.
                        '<br /><br />'A special-purpose company Umm Al Houl Power was formed by Qatar General Electricity and Water Corporation (Kahramaa, 60%), Qatar Petroleum (5%), Qatar Foundation (5%) and K1 Energy (30%) to manage and operate the project. K1 Energy is a consortium of Tokyo Electric Power Company (Tepco) and Mitsubishi Corp.
                        '<br /><br />'The project is being implemented under the government’s Qatar National Vision 2030 and will help to increase electricity and water output by 22% and 25% respectively.
                    </p>
                </div>

                <img className="me-4" src={arrow} width="22px" />
                <div className="ms-md-4 ms-sm-4 mt-n4">
                    <h4 className="overflow-hidden">What We did ?</h4>
                    <h6>GRP Gratings & Chequered Plates</h6>
                    <p className="overflow-hidden">SECON supplied and installed GRP gratings and GRP chequered plates as per the client’s construction design.</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Project