import MarketCard from "./marketCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

function Section4() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 730, min: 0 },
            items: 1
        }
    };

    const navigate = useNavigate()

    return <>
        <div className="container-fluid px-5 py-5 F6F6F6">
            <h2 className="bg-transparent blackText heading-animate">Market Sectors</h2>
            <div className="row">
                <Carousel responsive={responsive}>
                    <MarketCard text="Oil and Gas" handleClick={() => { navigate("/sectors/Oil and Gas") }} />
                    <MarketCard text="Renewable Energy" handleClick={() => { navigate("/sectors/Renewable Energy") }} />
                    <MarketCard text="Road and Infrastructure" handleClick={() => { navigate("/sectors/Road and Infrastructure") }} />
                    <MarketCard text="Fire and Safety" handleClick={() => { navigate("/sectors/Fire and Safety") }} />
                    <MarketCard text="Electrical and Instrumentation" handleClick={() => { navigate("/sectors/Electrical and Instrumentation") }} />
                    <MarketCard text="Utilities and Sewage" handleClick={() => { navigate("/sectors/Utilities and Sewage") }} />
                    <MarketCard text="Storage and Transportation" handleClick={() => { navigate("/sectors/Storage and Transportation") }} />
                    <MarketCard text="Marine and Automobile" handleClick={() => { navigate("/sectors/Marine and Automobiles") }} />
                    <MarketCard text="Industrial Complex" handleClick={() => { navigate("/sectors/Industrial Complex") }} />
                    <MarketCard text="Architectural and Landscaping" handleClick={() => { navigate("/sectors/Architectural and Landscaping") }} />
                    <MarketCard text="Facility Management" handleClick={() => { navigate("/sectors/Facility Management") }} />
                    <MarketCard text="Events, Signage and Fit-out" handleClick={() => { navigate("/sectors/Events, Signage and Fit-out") }} />
                </Carousel>
            </div>
        </div>
    </>
}

export default Section4