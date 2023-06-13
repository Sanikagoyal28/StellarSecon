import MarketCard from "./marketCard"

function Section3() {
    return <>
        <div className="container-fluid px-5 py-4 F6F6F6">
            <h2 className="bg-transparent blackText">Market Sectors</h2>
            <div className="marketFlex bg-transparent">
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
            </div>
        </div>
    </>
}

export default Section3