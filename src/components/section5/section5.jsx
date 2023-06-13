import ProdCard from "./prodCard"

function Section5() {
    return <>
        <div className="container-fluid px-5 py-4 five">
            <h2 className="bg-transparent blackText text-white mb-3">Products</h2>
            <div className="productFlex">
                <ProdCard head="Enclosures" />
                <ProdCard head="Fire and Safety" />
                <ProdCard head="Instrumentation" />
                <ProdCard head="Roofing Products" />
                <ProdCard head="Road and Infrastructures" />
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