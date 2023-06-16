import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import Section1 from "../section1/section1"
import img1 from "../../assets/image.jpg"
import tick from "../../assets/tick.svg"

function About() {
    return <>
        <Navbar />
        <Section1 />

        <div className="container-fluid text-white">
            <div className="row px-sm-5 px-md-0 px-lg-0">
                <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #000, #1f1f1f, #545454)" }}>
                    <img src={tick} />
                    <h2>Integrity</h2>
                    <p>Fundamental value of our organization is integrity. Every employee must adhere to mutual respect, strong moral, adequate transparency, high honesty, and ethical principles.  </p>
                </div>
                <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #121212, #4a4949, #7f4d4d)" }}>
                    <img src={tick} />
                    <h2>Safety</h2>
                    <p>Safety begins from ourselves. Workplace safety, health and well-being of employees are our top priorities.</p>
                </div>
                <div className="col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #391e1e, #441c1c, #a03931)" }}>
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
            <div className="row">
                <div className="col-lg-6 col-md-6 f2f2f2 px-5 py-5">
                    <h3 className="my-5">Secon</h3>
                    <p className="mb-5">SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                        SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                    </p>
                </div>

                <div className="col-lg-6 col-md-6 text-white pb-0 px-0 bg-transparent overflow-hidden aboutImage">
                    <img src={img1} width="100%" className="mb-n5" />
                    <div className="aboutContent overflow-hidden mx-5 my-5">
                        <h3 className="mt-4 mb-3 overflow-hidden">VISION</h3>
                        <p className="mb-5">Be the leader for most innovative and reliable composite solutions.</p>
                        <h3 className="mt-4 mb-3 overflow-hidden">MISSION</h3>
                        <p className="mb-5 col-md-9">To offer composite products and services, meeting client expectation with high quality, keeping health and safety standards, growing through innovation, and profitability to every stakeholder. </p>
                    </div>
                </div>
            </div>

            <div className="row px-5 py-5" >
                <div className="col-md-5 ps-5 py-4"><h1 className="mx-5 fw-bolder heading mb-0" style={{ letterSpacing: "4px" }}>SECON</h1>
                    <div className="underline" /></div>
                <div className="col-md-6 py-4">
                    <p style={{ fontSize: "1.1rem" }}>SECON is dedicated to adopting health, safety, environment, and quality (HSEQ) management standards as an essential for sustainable business performance and continuous improvement while manufacturing GRP composite products and delivering services.
                        <br /><br />  Our Integrated Management System is internationally certified for compliance with </p>

                </div>
            </div>
        </div>

        <div className="container-fluid text-white py-5 px-5" style={{ background: "#2b2b2b" }}>
            <div className="row justify-content-center align-item-center">
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="mb-3">2000000</h3>
                    <h5>Customers</h5>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    <h3>2000000</h3>
                    <h5>Customers</h5>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    <h3>2000000</h3>
                    <h5>Customers</h5>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                    <h3>2000000</h3>
                    <h5>Customers</h5>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default About