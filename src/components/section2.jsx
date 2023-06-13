import tick from "../assets/tick.svg"
import SlideCard from "./slideCard"
import about from "../assets/about_1.svg"

function Section2() {
    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 col-sm-12 me-4" >
                    <img className="shadow" src={about} height="580px" />
                </div>
                <div className="col-md-7 col-sm-12">
                    <p className="orangeText">Welcome To The World Of SECON, Where Innovation, Durability, And Sustainability Come Together To Provide Comprehensive Composite Solutions For Your Business Needs.</p>
                    <h2 className="mb-3 blackText">Experience The Power Of Innovative And Sustainable Composite Solutions With SECON.</h2>
                    <p className="fs-5 fw-normal lh-base" style={{ opacity: 0.8 }}>SECON (Systems Engineers & Contractors) is a Glass Reinforced Polyester (GRP) product manufacturing company established in 2013 serving businesses and projects in Qatar and internationally.
                        SECON focus on providing industrial composite products and services with unique designs, reliable manufacturing and delivering at high precision and quality. SECON caters comprehensive composite solutions to various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture.
                    </p>
                    <button className="btn btn-primary px-4 py-3 text-white">Read More</button>
                </div>
            </div>
        </div>

    </>
}

export default Section2