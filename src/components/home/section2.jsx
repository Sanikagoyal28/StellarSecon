import { useNavigate } from "react-router"
import about from "../../assets/about_1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

function Section2() {

    const navigate = useNavigate()

    function animate() {
        reveal()
        moveLeft()
    }

    function reveal() {
        var text1 = document.getElementsByClassName("home-about-1")[0]
        var text2 = document.getElementsByClassName("home-about-2")[0]
        var text3 = document.getElementsByClassName("home-about-3")[0]

        var windowHeight = window.innerHeight;
        var revealTop1 = text1.getBoundingClientRect().top
        var revealTop2 = text2.getBoundingClientRect().top
        var revealTop3 = text3.getBoundingClientRect().top

        if (revealTop1 < windowHeight - 40)
            text1.classList.add("active")
        else
            text1.classList.remove("active")

        if (revealTop2 < windowHeight)
            text2.classList.add("active")
        else
            text2.classList.remove("active")

        if (revealTop3 < windowHeight + 40)
            text3.classList.add("active")
        else
            text3.classList.remove("active")
    }

    function moveLeft() {
        var left = document.getElementsByClassName("left")[0]
        var windowHeight = window.innerHeight;
        var top = left.getBoundingClientRect().top

        if (top < windowHeight + 100)
            left.classList.add("active")
        else
            left.classList.remove("active")
    }

    useEffect(() => {
        window.addEventListener("scroll", animate)
        return () => {
            window.removeEventListener("scroll", animate)
            console.log("unmount")
        }
    }, [])

    return <>
        <div className="container-fluid py-5 px-md-3 px-lg-0">
            <div className="row">
                <div className="left col-lg-5 ms-3 ps-0 col-md-5 me-2 col-sm-12 hColumn1 overflow-hidden"  >
                    <img className="shadow mb-sm-4 overflow-hidden" src={about} />
                </div>
                <div className="col-lg-6 text-center col-md-6 col-sm-11 hColumn2 overflow-hidden"  >
                    <p className="orangeText home-about-1 overflow-hidden">Welcome To The World Of SECON, Where Innovation, Durability, And Sustainability Come Together To Provide Comprehensive Composite Solutions For Your Business Needs.</p>
                    <h2 className="mb-3 blackText home-about-2 overflow-hidden">Experience The Power Of Innovative And Sustainable Composite Solutions With SECON.</h2>
                    <p className="fs-5 fw-normal lh-base home-about-3 overflow-hidden" style={{ opacity: 0.8 }}>SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                        SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                    </p>
                    <button className="btn btn-primary px-3 py-2 text-white mainButton about-btn-animate overflow-hidden" onClick={() => { navigate("/about") }}>Read More
                        <FontAwesomeIcon className="ms-1" style={{ fontSize: "14px" }} icon={faAnglesRight} />
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default Section2