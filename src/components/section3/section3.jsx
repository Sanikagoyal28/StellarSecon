import ServiceCard from "./serviceCard";

function Section3() {

    return <>
        <div className="container-fluid service px-5 py-4">
            <h2 className="bg-transparent blackText text-white mb-3">Our Services</h2>
                <div className="row">
                    <div className="col-md-3">
                        <ServiceCard head="Manufacturing" handleClick={()=>{console.log("one")}} text="SECON manufactures wide range of GRP products to cater various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture. " />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard head="Composite Repair" handleClick={()=>{console.log("two")}} text="SECON offers advanced custom-engineered composite repair systems, which are designed explicitly for piping, pipelines, tanks and concrete structures." />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard head="GRP Lining" handleClick={()=>{console.log("three")}} text="SECON offer GRP lining services that protect and extend life of containments that store fuel, chemicals, food, water and sewage. " />
                    </div>
                    <div className="col-md-3">
                        <ServiceCard head="GRP Piping" handleClick={()=>{console.log("four")}} text="SECON offers field services for GRP/GRE pipe and fitting installations, site inspection, repair and custom fabrication. " />
                    </div>
                </div>
        </div>
    </>
}

export default Section3