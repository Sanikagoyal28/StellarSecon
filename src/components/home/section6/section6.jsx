import ProjCard from "./projCard"
import HorizontalScroll from 'react-scroll-horizontal'

function Section6() {
    return <>
        <div className="container-fluid px-5 py-5 F6F6F6">
            <h2 className="blackText heading-animate">Portfolio Projects</h2>
            {/* <div className="row align-item-center justify-content-center"> */}
            <HorizontalScroll className="scroll">
                <div className="proj-card">
                    <ProjCard head="Umm Al Houl Power(UHP)" status="Completed" year="2018" scope="Supply and Installation GRP gratings & Chequered plates" />
                </div>
                <div className="proj-card">
                    <ProjCard head="Red Line - South" status="Completed" year="2019" scope="In-situ GRP lamination and Manufacturing of gully baskets" />
                </div>
                <div className="proj-card">
                    <ProjCard head="Al Bayt Stadium, FIFA stadium 2022" status="Completed" year="2019" scope="Manufacturing of gully baskets and Sealing plates" />
                </div>
                <div className="proj-card">
                    <ProjCard head="Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways" status="Completed" year="2019" scope="Design, Engineering, Manufacture & Installation of GRP Works." />
                </div>
                <div className="proj-card">
                    <ProjCard head="Corniche park walkway enhancement floral arch" status="Completed" year="2018" scope="Design and manufacturing of GRP planter pots" />
                </div>
            </HorizontalScroll>
            {/* </div> */}
        </div>
    </>
}

export default Section6