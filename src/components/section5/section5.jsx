import ProdCard from "./prodCard"
import Enclosure from "../../assets/enclosure.svg"
import Road from "../../assets/road.svg"
import Roof from "../../assets/roof.svg"
import fire from "../../assets/fire.svg"
import instr from "../../assets/instrum.svg"

function Section5() {
    return <>
        <div className="container-fluid px-5 py-5 five">
            <h2 className="bg-transparent blackText text-white mb-3">Products</h2>
            <div className="productFlex">
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
            </div>
        </div>
    </>
}

export default Section5