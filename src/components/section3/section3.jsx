import ServiceCard from "./serviceCard";

function Section3() {

    return <>
        <div className="container-fluid px-5 py-5" style={{backgroundColor:"#f1f0f0"}}>
            <h2 className="bg-transparent blackText">Our Services</h2>
                <div className="row justify-content-center">
                    <div className=" col-md-4 col-lg-3">
                        <ServiceCard background="linear-gradient(to bottom right, #000, #1f1f1f, #545454)" head="Manufacturing" handleClick={()=>{console.log("one")}} text="SECON manufactures wide range of GRP products to cater various industries such as Oil & Gas, Petrochemical, Energy, Road, Utility, Infrastructure, Sewage, Marine, Automobile, Landscaping and Agriculture. " />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <ServiceCard background="linear-gradient(to bottom right, #121212, #4a4949, #714444)" head="Composite Repair" handleClick={()=>{console.log("two")}} text="SECON offers advanced custom-engineered composite repair systems, which are designed explicitly for piping, pipelines, tanks and concrete structures." />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <ServiceCard background="linear-gradient(to bottom right, #4a2929, #522222, #a03931)" head="GRP Lining" handleClick={()=>{console.log("three")}} text="SECON offer GRP lining services that protect and extend life of containments that store fuel, chemicals, food, water and sewage. " />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <ServiceCard background="linear-gradient(to bottom right, #a03931, #dc7a84, #adacac)"  head="GRP Piping" handleClick={()=>{console.log("four")}} text="SECON offers field services for GRP/GRE pipe and fitting installations, site inspection, repair and custom fabrication. " />
                    </div>
                </div>
        </div>
    </>
}

export default Section3