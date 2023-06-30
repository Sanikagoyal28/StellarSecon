import { useNavigate } from "react-router";
import ServiceCard from "./serviceCard";
import { useEffect } from "react";

function Section3() {

    function animate() {
        service()
    }

    function service() {
        var one = document.getElementsByClassName("service-card1")[0]
        var two = document.getElementsByClassName("service-card2")[0]
        var three = document.getElementsByClassName("service-card3")[0]
        var four = document.getElementsByClassName("service-card4")[0]

        var windowHeight = window.innerHeight;
        var revealTop = one.getBoundingClientRect().top

        if (revealTop < windowHeight + 20) {
            one.classList.add("active")
            two.classList.add("active")
            three.classList.add("active")
            four.classList.add("active")
        }
        else {
            one.classList.remove("active")
            two.classList.remove("active")
            three.classList.remove("active")
            four.classList.remove("active")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", animate)
        return () => {
            window.removeEventListener("scroll", animate)
        }
    }, [])

    const navigate = useNavigate()
    return <>
        <div className="container-fluid py-5" style={{ backgroundColor: "#f1f0f0" }}>
            <h2 className="bg-transparent blackText heading-animate mx-5">Our Services</h2>
            <div className="row justify-content-center">
                <div className="service-card1 col-md-4 col-lg-3 px-0" >
                    <ServiceCard background="linear-gradient(to bottom right, #000, #1f1f1f, #545454)" head="Manufacturing" handleClick={() => { navigate("/services/Manufacturing") }} text="SECON manufactures wide range of GRP products to cater various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture. " />
                </div>
                <div className="service-card2 col-md-4 col-lg-3 px-0">
                    <ServiceCard className="sCard2" background="linear-gradient(to bottom right, #121212, #4a4949, #714444)" head="Composite Repair" handleClick={() => { navigate("/services/Composite Repair") }} text="SECON offers advanced custom-engineered composite repair systems, which are designed explicitly for piping, pipelines, tanks and concrete structures." />
                </div>
                <div className="service-card3 col-md-4 col-lg-3 px-0" id="card3">
                    <ServiceCard className="sCard3" background="linear-gradient(to bottom right, #4a2929, #522222, #a03931)" head="GRP Lining" handleClick={() => { navigate("/services/GRP Lining") }} text="SECON offer GRP lining services that protect and extend life of containments that store fuel, chemicals, food, water and sewage. " />
                </div>
                <div className="service-card4 col-md-4 col-lg-3 px-0" id="card4">
                    <ServiceCard className="sCard4" background="linear-gradient(to bottom right, #a03931, #dc7a84, #adacac)" head="GRP Piping" handleClick={() => { navigate("/services/GRP Piping") }} text="SECON offers field services for GRP/GRE pipe and fitting installations, site inspection, repair and custom fabrication. " />
                </div>
            </div>
        </div>
    </>
}

export default Section3

//  style={{ backgroundColor: "#f1f0f0" }}>