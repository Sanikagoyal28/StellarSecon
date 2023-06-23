import ProjCard from "./projCard"


function Section6() {
    return <>
        <div className="container-fluid px-5 py-5 F6F6F6">
            <h2 className="blackText heading-animate">Portfolio Projects</h2>
            <div className="row align-item-center justify-content-center">
                <div className="col-md-5 col-lg-4">
                    <ProjCard head="Umm Al Houl Power(UHP)" status="Completed" year="2018" scope="Supply and Installation GRP gratings & Chequered plates" />
                </div>
                <div className="col-md-5 col-lg-4">
                    <ProjCard head="Red Line - South" status="Completed" year="2019" scope="In-situ GRP lamination and Manufacturing of gully baskets" />
                </div>
                <div className="col-md-5 col-lg-4">
                    <ProjCard head="Al Bayt Stadium, FIFA stadium 2022" status="Completed" year="2019" scope="Manufacturing of gully baskets and Sealing plates" />
                </div>
                <div className="col-md-5 col-lg-4">
                    <ProjCard head="Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways" status="Completed" year="2019" scope="Design, Engineering, Manufacture & Installation of GRP Works." />
                </div>
                <div className="col-md-5 col-lg-4">
                    <ProjCard head="Corniche park walkway enhancement floral arch" status="Completed" year="2018" scope="Design and manufacturing of GRP planter pots" />
                </div>
            </div>
        </div>
    </>
}

export default Section6