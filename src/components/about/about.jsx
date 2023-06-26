import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import Section1 from "../home/section1/section1"
import img1 from "../../assets/image.jpg"
import tick from "../../assets/tick.svg"
import { useEffect } from "react"

function About() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    window.addEventListener("scroll", animate)

    function animate (){
        reveal()
    }

    function reveal() {
        var cards = document.getElementsByClassName("about-four-cards")[0]

        var windowHeight = window.innerHeight;
        var revealTop = cards.getBoundingClientRect().top

        if (revealTop < windowHeight - 80)
            cards.classList.add("active")
        else
            cards.classList.remove("active")
    }

    return <>
        <div className='bodyWrapper'>
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                <Section1 />
                <div className="container-fluid text-white about-four-cards">
                    <div className="row px-md-0 px-lg-0">
                        <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #000, #1f1f1f, #545454)" }}>
                            <img src={tick} />
                            <h2>Integrity</h2>
                            <p>Fundamental value of our organization is integrity. Every employee must adhere to mutual respect, strong moral, adequate transparency, high honesty, and ethical principles.  </p>
                        </div>
                        <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #121212, #4a4949, #714444)" }}>
                            <img src={tick} />
                            <h2>Safety</h2>
                            <p>Safety begins from ourselves. Workplace safety, health and well-being of employees are our top priorities.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #4a2929, #522222, #a03931)" }}>
                            <img src={tick} />
                            <h2>Quality</h2>
                            <p>We are committed to delivery non compromised quality products and services. Effective implementation of quality systems and customer services makes us eminent for our clients. </p>
                        </div>
                        <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #a03931, #dc7a84, #adacac)" }}>
                            <img src={tick} />
                            <h2>Innovation</h2>
                            <p>Innovation is our progression. Continuous farming of ideas and transforming them into most reliable and economical product and services is our competency.  </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid ">
                    <div className="row f2f2f2 pb-0">
                        <div className="col-lg-6 col-md-6 mt-md-5 mt-sm-2 px-5 pt-5 pb-sm-5 aColumn1 overflow-hidden">
                            {/* <h3 className="my-5">Secon</h3> */}
                            <p className="about-content-1">SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                            </p><br />
                            <p className="about-content-2">SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 text-white pb-0 px-0 py-0 overflow-hidden aColumn2 background-image" >
                            {/* <img src={img1} width="100%" className="mb-n5 background-image"/> */}
                            <div className="aboutContent overflow-hidden mx-5 my-5">
                                <h3 className="mt-4 text-white mb-3 overflow-hidden">VISION</h3>
                                <p className="mb-5">Be the leader for most innovative and reliable composite solutions.</p>
                                <h3 className="mt-4 mb-3 overflow-hidden">MISSION</h3>
                                <p className="mb-5 col-md-9">To offer composite products and services, meeting client expectation with high quality, keeping health and safety standards, growing through innovation, and profitability to every stakeholder. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <p style={{ fontSize: "1.1rem" }}>SECON is dedicated to adopting health, safety, environment, and quality (HSEQ) management standards as an essential for sustainable business performance and continuous improvement while manufacturing GRP composite products and delivering services.
                        <br /><br />  Our Integrated Management System is internationally certified for compliance with : </p>

                    <div className="row overflow-hidden d-flex justify-content-center align-items-center" >
                        <div className="card col-md-3 col-sm-11 mb-sm-3 mx-3 py-5 px-3 border border-3 border-primary" style={{ background: "#f2b8becc", height: "180px" }}>
                            <h5 className="overflow-hidden">ISO 9001 : 2015</h5>
                            <h6 className="overflow-hidden">Quality Management System</h6>
                        </div>
                        <div className="card col-md-3 col-sm-11 mb-sm-3 mx-3 py-5 px-3 border border-3 border-primary" style={{ background: "#eab2b7cc", height: "180px" }}>
                            <h5 className="overflow-hidden">ISO 14001: 2015</h5>
                            <h6 className="overflow-hidden">Environmental Management</h6>
                        </div>
                        <div className="card col-md-3 col-sm-11 mb-sm-3 mx-3 py-5 px-3 border border-3 border-primary" style={{ background: "#f2b8becc", height: "180px" }}>
                            <h5 className="overflow-hidden">ISO 45001 : 2018</h5>
                            <h6 className="overflow-hidden">Occupational Health and Safety Management</h6>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-white py-5 px-5 px-sm-3" style={{ background: "#2b2b2b" }}>
                    <div className="row py-5">
                        <div className="col-md-3 col-sm-6 my-sm-5 my-3 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="mb-3 fs-sm-4 fw-bolder" style={{ letterSpacing: "2px" }}>2000000</h2>
                            <h5 className="heading fs-sm-4">Customers</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 my-sm-5 my-3 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="mb-3 fs-sm-4 fw-bolder" style={{ letterSpacing: "2px" }}>2000000</h2>
                            <h5 className="heading">Customers</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 my-sm-5 my-3 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="mb-3 fs-sm-4 fw-bolder" style={{ letterSpacing: "2px" }}>2000000</h2>
                            <h5 className="heading">Customers</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 my-sm-5 my-3 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="mb-3 fs-sm-4 fw-bolder" style={{ letterSpacing: "2px" }}>2000000</h2>
                            <h5 className="heading">Customers</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default About