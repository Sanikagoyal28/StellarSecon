import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import img1 from "../../assets/image.jpg"
import tick from "../../assets/tick.svg"
import { useEffect } from "react"
import one from "../../assets/iso_1.svg"
import two from "../../assets/iso_2.svg"
import three from "../../assets/iso_3.svg"

function About() {

    function animate() {
        reveal()
        fade()
        text()
    }

    function text() {
        var content = document.getElementsByClassName("aboutText")

        var windowHeight = window.innerHeight;

        for (var i = 0; i < content.length; i++) {
            var top = content[i].getBoundingClientRect().top

            if (top < windowHeight + 50) {
                content[i].classList.add("active")
            }
            else {
                content[i].classList.remove("active")
            }
        }
    }

    function reveal() {
        var one = document.getElementsByClassName("aCard1")[0]
        var two = document.getElementsByClassName("aCard2")[0]
        var three = document.getElementsByClassName("aCard3")[0]
        var four = document.getElementsByClassName("aCard4")[0]

        var windowHeight = window.innerHeight;
        var top1 = one.getBoundingClientRect().top

        if (top1 < windowHeight - 110) {
            one.classList.add("active")
            two.classList.add("active")
            three.classList.add("active")
            four.classList.add("active")
        }
        else {
            one.classList.add("active")
            two.classList.remove("active")
            three.classList.remove("active")
            four.classList.remove("active")
        }
    }

    function fade() {
        var content = document.getElementsByClassName("projectText")

        var windowHeight = window.innerHeight;

        for (var i = 0; i < content.length; i++) {
            var top = content[i].getBoundingClientRect().top

            if (top < windowHeight - 50) {
                content[i].classList.add("active")
            }
            else {
                content[i].classList.remove("active")
            }
        }
    }

    useEffect(() => {
        window.scroll(0, 0)
        window.addEventListener("scroll", animate)
        return () => {
            window.removeEventListener("scroll", animate)
        }
    }, [])

    return <>
        <div className='bodyWrapper'>
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                <div className="container-fluid mx-0 px-0" style={{ marginTop: "70px" }}>
                    <img src={img1} width="100%" height="580px" />
                </div>
                <div className="container-fluid text-white">
                    <div className="row px-md-0 px-lg-0">
                        <div className="aCard1  col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #000, #1f1f1f, #545454)" }}>
                            <img src={tick} />
                            <h2 className="projectText">Integrity</h2>
                            <p className="projectText">Fundamental value of our organization is integrity. Every employee must adhere to mutual respect, strong moral, adequate transparency, high honesty, and ethical principles.  </p>
                        </div>
                        <div className="aCard2 col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #121212, #4a4949, #714444)" }}>
                            <img src={tick} />
                            <h2 className="projectText">Safety</h2>
                            <p className="projectText">Safety begins from ourselves. Workplace safety, health and well-being of employees are our top priorities.</p>
                        </div>
                        <div className="aCard3 col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #4a2929, #522222, #a03931)" }}>
                            <img src={tick} />
                            <h2 className="projectText">Quality</h2>
                            <p className="projectText">We are committed to delivery non compromised quality products and services. Effective implementation of quality systems and customer services makes us eminent for our clients. </p>
                        </div>
                        <div className="aCard4 col-lg-3 col-md-6 px-4 py-5" style={{ background: "linear-gradient(to bottom right, #a03931, #dc7a84, #adacac)" }}>
                            <img src={tick} />
                            <h2 className="projectText">Innovation</h2>
                            <p className="projectText">Innovation is our progression. Continuous farming of ideas and transforming them into most reliable and economical product and services is our competency.  </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid ">
                    <div className="row f2f2f2 pb-0">
                        <div className="col-lg-6 col-md-6 mt-md-5 mt-sm-2 px-5 pt-5 pb-sm-5 aColumn1 overflow-hidden">
                            {/* <h3 className="my-5">Secon</h3> */}
                            <p className="about-content-1 aboutText">SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                            </p><br />
                            <p className="about-content-2 aboutText">SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 text-white pb-0 px-0 py-0 overflow-hidden aColumn2 background-image" >
                            {/* <img src={img1} width="100%" className="mb-n5 background-image"/> */}
                            <div className="aboutContent overflow-hidden mx-5 my-5">
                                <h3 className="mt-4 text-white mb-3 overflow-hidden aboutText">VISION</h3>
                                <p className="mb-5 aboutText">Be the leader for most innovative and reliable composite solutions.</p>
                                <h3 className="mt-4 mb-3 overflow-hidden aboutText">MISSION</h3>
                                <p className="mb-5 col-md-9 aboutText">To offer composite products and services, meeting client expectation with high quality, keeping health and safety standards, growing through innovation, and profitability to every stakeholder. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <p className="aboutText" style={{ fontSize: "1.1rem" }}>SECON is dedicated to adopting health, safety, environment, and quality (HSEQ) management standards as an essential for sustainable business performance and continuous improvement while manufacturing GRP composite products and delivering services.
                        <br /><br />  Our Integrated Management System is internationally certified for compliance with : </p>

                    <div className="row overflow-hidden d-flex justify-content-center align-items-center" >
                        <div className="col-md-3 col-sm-11 mb-sm-4 mb-md-0 mb-lg-0 mb-xl-0 d-flex justify-content-center align-items-center">
                            <img src={one} width="160px" />
                        </div>
                        <div className="col-md-3 col-sm-11 mb-sm-4 mb-md-0 mb-lg-0 mb-xl-0 d-flex justify-content-center align-items-center">
                            <img src={two} width="160px" />
                        </div>
                        <div className="col-md-3 col-sm-11 mb-sm-4 mb-md-0 mb-lg-0 mb-xl-0 d-flex justify-content-center align-items-center">
                            <img src={three} width="160px" />
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