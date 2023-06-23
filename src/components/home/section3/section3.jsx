import { useNavigate } from "react-router";
import ServiceCard from "./serviceCard";

function Section3() {

    window.addEventListener("scroll", animate)

    function animate() {
        service()
    }

    function service() {
        var cards = document.getElementsByClassName("service-animate")[0]

        var windowHeight = window.innerHeight;
        var revealTop = cards.getBoundingClientRect().top

        console.log(revealTop, windowHeight)

        if (revealTop < windowHeight + 20)
            cards.classList.add("active")
        else
            cards.classList.remove("active")
    }

    const navigate = useNavigate()
    return <>
        <div className="container-fluid px-5 py-5" style={{ backgroundColor: "#f1f0f0" }}>
            <h2 className="bg-transparent blackText heading-animate">Our Services</h2>
            <div className="row justify-content-center service-animate">
                <div className=" col-md-4 col-lg-3">
                    <ServiceCard background="linear-gradient(to bottom right, #000, #1f1f1f, #545454)" head="Manufacturing" handleClick={() => { navigate("/services/Manufacturing") }} text="SECON manufactures wide range of GRP products to cater various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture. " />
                </div>
                <div className="col-md-4 col-lg-3">
                    <ServiceCard background="linear-gradient(to bottom right, #121212, #4a4949, #714444)" head="Composite Repair" handleClick={() => { navigate("/services/Composite Repair") }} text="SECON offers advanced custom-engineered composite repair systems, which are designed explicitly for piping, pipelines, tanks and concrete structures." />
                </div>
                <div className="col-md-4 col-lg-3">
                    <ServiceCard background="linear-gradient(to bottom right, #4a2929, #522222, #a03931)" head="GRP Lining" handleClick={() => { navigate("/services/GRP Lining") }} text="SECON offer GRP lining services that protect and extend life of containments that store fuel, chemicals, food, water and sewage. " />
                </div>
                <div className="col-md-4 col-lg-3">
                    <ServiceCard background="linear-gradient(to bottom right, #a03931, #dc7a84, #adacac)" head="GRP Piping" handleClick={() => { navigate("/services/GRP Piping") }} text="SECON offers field services for GRP/GRE pipe and fitting installations, site inspection, repair and custom fabrication. " />
                </div>
            </div>
        </div>
    </>
}

export default Section3