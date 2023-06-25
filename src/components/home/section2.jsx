import { useNavigate } from "react-router"
import about from "../../assets/about_1.svg"

function Section2() {

    window.addEventListener("scroll", animate)

    function animate() {
        reveal()
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

        if (revealTop2 < windowHeight )
            text2.classList.add("active")
        else
            text2.classList.remove("active")

        if (revealTop3 < windowHeight + 40)
            text3.classList.add("active")
        else
            text3.classList.remove("active")
    }

    const navigate = useNavigate()

    return <>
        <div className="container-lg py-5 px-md-3 px-lg-0">
            <div className="row ">
                <div className="col-lg-5 col-md-5 col-sm-12 me-4 hColumn1 overflow-hidden"  >
                    <img className="shadow mb-sm-4" src={about} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-11 hColumn2"  >
                    <p className="orangeText home-about-1">Welcome To The World Of SECON, Where Innovation, Durability, And Sustainability Come Together To Provide Comprehensive Composite Solutions For Your Business Needs.</p>
                    <h2 className="mb-3 blackText home-about-2">Experience The Power Of Innovative And Sustainable Composite Solutions With SECON.</h2>
                    <p className="fs-5 fw-normal lh-base home-about-3" style={{ opacity: 0.8 }}>SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                        SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                    </p>
                    <button className="btn btn-primary px-4 py-3 text-white mainButton about-btn-animate" onClick={()=>{navigate("/about")}}>Read More</button>
                </div>
            </div>
        </div>

    </>
}

export default Section2