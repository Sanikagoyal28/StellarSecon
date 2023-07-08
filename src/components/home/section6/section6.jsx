import ProjCard from "./projCard"
import HorizontalScroll from 'react-scroll-horizontal'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./project.css";
import { useNavigate } from "react-router";

function Section6() {

    const navigate = useNavigate()

    // <div className="container-fluid px-5 py-5 F6F6F6">
    //     <h2 className="blackText heading-animate">Portfolio Projects</h2>
    //     <div className="row align-item-center justify-content-center">
    //         <HorizontalScroll className="scroll">
    //             <div className="proj-card">
    //                 <ProjCard head="Umm Al Houl Power(UHP)" status="Completed" year="2018" scope="Supply and Installation GRP gratings & Chequered plates" />
    //             </div>
    //             <div className="proj-card">
    //                 <ProjCard head="Red Line - South" status="Completed" year="2019" scope="In-situ GRP lamination and Manufacturing of gully baskets" />
    //             </div>
    //             <div className="proj-card">
    //                 <ProjCard head="Al Bayt Stadium, FIFA stadium 2022" status="Completed" year="2019" scope="Manufacturing of gully baskets and Sealing plates" />
    //             </div>
    //             <div className="proj-card">
    //                 <ProjCard head="Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways" status="Completed" year="2019" scope="Design, Engineering, Manufacture & Installation of GRP Works." />
    //             </div>
    //             <div className="proj-card">
    //                 <ProjCard head="Corniche park walkway enhancement floral arch" status="Completed" year="2018" scope="Design and manufacturing of GRP planter pots" />
    //             </div>
    //         </HorizontalScroll>
    //     </div>
    // </div>

    gsap.registerPlugin(ScrollTrigger);
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth
                }
            });
        }, component);
        return () => ctx.revert();
    });


    return <>
        <div className="container-fluid px-5 pt-5 F6F6F6">
            <h2 className="blackText heading-animate">Portfolio Projects</h2>
            <div ref={component} className="mt-5">
           
                <div />
                
                <div ref={slider} className="project-container">
                    <div className="panel">
                        <ProjCard head="Umm Al Houl Power(UHP)" status="Completed" year="2018" scope="Supply and Installation GRP gratings & Chequered plates" handleClick={() => { navigate("/project/Umm Al Houl Power (UHP)") }} />
                    </div>
                    <div className="panel">
                        <ProjCard head="Red Line - South" status="Completed" year="2019" scope="In-situ GRP lamination and Manufacturing of gully baskets" handleClick={() => { navigate("/project/Red Line - South") }} />
                    </div>
                    <div className="panel">
                        <ProjCard head="Al Bayt Stadium, FIFA stadium 2022" status="Completed" year="2019" scope="Manufacturing of gully baskets and Sealing plates" handleClick={() => { navigate("/project/Al Bayt Stadium, FIFA stadium 2022") }}  />
                    </div>
                    <div className="panel">
                        <ProjCard head="Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways" status="Completed" year="2019" scope="Design, Engineering, Manufacture & Installation of GRP Works." handleClick={() => { navigate("/project/Supply & Installation of Mockup Steel Shades with GRP Units for Public Pathways") }} />
                    </div>
                    <div className="panel">
                        <ProjCard head="Corniche park walkway enhancement floral arch" status="Completed" year="2018" scope="Design and manufacturing of GRP planter pots" handleClick={() => { navigate("/project/Corniche park walkway enhancement floral arch") }} />
                    </div>
                    {/* <div className="panel"> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
}

export default Section6