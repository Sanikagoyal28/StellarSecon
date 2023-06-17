import ProdCard from "./prodCard"
import Enclosure from "../../assets/enclosure.svg"
import Road from "../../assets/road.svg"
import Roof from "../../assets/roof.svg"
import fire from "../../assets/fire.svg"
import instr from "../../assets/instrum.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Section5() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1100, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 850, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 2
        },
        small:{
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };

    return <>
        <div className="container-fluid px-5 py-5" style={{ background: "linear-gradient(to bottom right, #89322b, #dc7a84, #9b9b9b)" }} >
            <h2 className="bg-transparent blackText text-white mb-3">Products</h2>
            {/* <div className="productFlex"> */}
            <Carousel responsive={responsive} className="mb-5">
                <ProdCard head="Enclosures" image={Enclosure}  />
                <ProdCard head="Fire and Safety" image={fire} />
                <ProdCard head="Instrumentation" image={instr} />
                <ProdCard head="Roofing Products" image={Roof} />
                <ProdCard head="Road and Infrastructures" image={Road} />
                <ProdCard head="Architectural Features" />
                <ProdCard head="Planters" />
                <ProdCard head="Bespoke" />
                <ProdCard head="Pultruded Products" />
                <ProdCard head="Resins and Fibres" />
                </Carousel>
            {/* </div> */}
        </div>
    </>
}

export default Section5