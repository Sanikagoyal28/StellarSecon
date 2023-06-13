import MarketCard from "./marketCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <>
        <div className="container-fluid px-5 py-5 F6F6F6">
            <h2 className="bg-transparent blackText">Market Sectors</h2>
            <Carousel responsive={responsive}>
                <MarketCard text="Oil and Gas" />
                <MarketCard text="Renewable Energy" />
                <MarketCard text="Road and Infrastructure" />
                <MarketCard text="Fire and Safety" />
                <MarketCard text="Electrical and Instrumentation" />
                <MarketCard text="Utilities and Sewage" />
                <MarketCard text="Storage and Transportation" />
                <MarketCard text="Marine and Automobile" />
                <MarketCard text="Industrial Complex" />
                <MarketCard text="Architectural and Landscaping" />
                <MarketCard text="Facility Management" />
                <MarketCard text="Events, Signage and Fit-out" />
            </Carousel>
        </div>
    </>
}

export default Section4