import Carousel from "../utils/carousel"
import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import img1 from "../../assets/image.jpg"
import arrow from "../../assets/arrow.svg"
import projects from "./projectData"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function Project() {

    const [data, setData] = useState({
        title: "",
        client: "",
        scope: "",
        year: "",
        status: "",
        desc: "",
        list: []
    })

    const { project } = useParams()

    useEffect(() => {
        if (projects.length > 0) {
            projects.map((s) => {
                if (s.title === project) {
                    setData({
                        ...data,
                        title: s.title,
                        client: s.client,
                        scope: s.scope,
                        year: s.year,
                        status: s.status,
                        desc: s.desc,
                        list: s.list
                    })
                }
            })
        }
    }, [project])

    // useEffect(() => {
    //     window.scroll(0, 0)
    // }, [])

    return <>
        <Navbar />
        <div className="container py-5" style={{ marginTop: "70px" }} >
            <div className="fitContent mb-n3">
                <h2 className="slideText heading mb-0" >{data.title}</h2>
                <div className="underline" />
            </div>
            <Carousel image={img1} />

            <div className="row my-4 d-flex justify-content-center align-items-center">
                <div className="col-md-2">
                    <div className="card projCard shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Project Title</h5>
                        <h6>{data.title}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card projCard shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "radial-gradient(#adacac, #dc7a84, #a03931)" }}>
                        <h5>Client</h5>
                        <h6>{data.client}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card projCard shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Scope</h5>
                        <h6>{data.scope}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card projCard shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "radial-gradient(#adacac, #dc7a84, #a03931)" }}>
                        <h5>Year</h5>
                        <h6>{data.year}</h6>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card projCard shadow-sm px-3 py-3 text-center d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "radial-gradient(#714444, #4a4949, #121212)" }}>
                        <h5>Status</h5>
                        <h6>{data.status}</h6>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <img className="me-3" src={arrow} width="22px" />
                <div className="ms-md-4 ms-sm-4 mt-n4">
                    <h4 className="overflow-hidden">Description</h4>
                    <p className="overflow-hidden">
                        {data.desc}
                    </p>
                </div>

                <img className="me-4" src={arrow} width="22px" />
                <div className="ms-md-4 ms-sm-4 mt-n4">
                    <h4 className="overflow-hidden">What We did ?</h4>

                    {data.list.length > 0 ? data.list.map((l) => {
                        return <>
                            <h6>{l.head}</h6>
                            <p className="overflow-hidden">{l.content}</p>
                        </>
                    }) : null}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Project