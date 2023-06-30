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

    function animate() {
        reveal()
        text()
    }

    function reveal() {
        var one = document.getElementsByClassName("aCard1")[0]
        var two = document.getElementsByClassName("aCard2")[0]
        var three = document.getElementsByClassName("aCard3")[0]
        var four = document.getElementsByClassName("aCard4")[0]
        // var five = document.getElementsByClassName("aCard5")[0]

        var windowHeight = window.innerHeight;
        var top1 = one.getBoundingClientRect().top

        if (top1 < windowHeight - 100) {
            one.classList.add("active")
            two.classList.add("active")
            three.classList.add("active")
            four.classList.add("active")
            // five.classList.add("active")
        }
        else {
            one.classList.add("active")
            two.classList.remove("active")
            three.classList.remove("active")
            four.classList.remove("active")
            // five.classList.remove("active")
        }
    }

    function text() {
        var content = document.getElementsByClassName("projectText")

        var windowHeight = window.innerHeight;

        for (var i = 0; i < content.length; i++) {
            var top = content[i].getBoundingClientRect().top

            if (top < windowHeight - 50) {
                content[i].classList.add("active")
            }
            else {
                content[i].classList.remove("active")
            }
        }
    }

    useEffect(() => {
        window.scroll(0, 0)
        window.addEventListener("scroll", animate)
        return () => {
            window.removeEventListener("scroll", animate)
        }
    }, [])

    return <>
        <div className="bodyWrapper">
            <Navbar />
            <div style={{ flexGrow: 1, marginTop: "70px" }}>
                <div className="container-fluid px-0 py-5">
                    <div className="fitContent mb-n3 m-auto text-center">
                        <h2 className="slideText heading mb-0" >{data.title}</h2>
                        <div className="underline" />
                    </div>
                    <Carousel image={img1} />

                    <div className="row my-4 mx-2 d-flex justify-content-center align-items-center">
                        <div className="col-md-3 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="card aCard1 py-0 projCard shadow text-center text-white" >
                                <h5 className="d-flex px-2 justify-content-center align-items-center">Project</h5>
                                <h6 className="d-flex px-2 justify-content-center align-items-center">{data.title}</h6>
                            </div>
                        </div>
                        <div className="col-md-3 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="card aCard2 py-0 projCard shadow text-center text-white" >
                                <h5 className="d-flex px-2 justify-content-center align-items-center">Client</h5>
                                <h6 className="d-flex px-2 justify-content-center align-items-center">{data.client}</h6>
                            </div>
                        </div>
                        <div className="col-md-3 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="card aCard3 py-0 projCard shadow text-center text-white" >
                                <h5 className="d-flex px-2 justify-content-center align-items-center">Scope</h5>
                                <h6 className="d-flex px-2 justify-content-center align-items-center">{data.scope}</h6>
                            </div>
                        </div>
                        <div className="col-md-3 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                            <div className="card py-0 aCard4 projCard shadow text-center text-white" >
                                <h5 className="d-flex px-2 justify-content-center align-items-center">Year <br /> ( Status )</h5>
                                <h6 className="d-flex px-2 justify-content-center align-items-center">{data.year} <br /> ( {data.status} )</h6>
                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <div className="card py-0 aCard5 projCard shadow text-center text-white" >
                                <h5 className="d-flex px-2 justify-content-center align-items-center">Status</h5>
                                <h6 className="d-flex px-2 justify-content-center align-items-center">{data.status}</h6>
                            </div>
                        </div> */}
                    </div>

                    <div className="mt-5 mx-5">
                        <div className="ms-md-4 mb-4">
                            <h4 className="overflow-hidden projectText">Description</h4>
                            <p className="overflow-hidden projectText">
                                {data.desc}
                            </p>
                        </div>

                        {/* <img className="me-4" src={arrow} width="22px" /> */}
                        <div className="ms-md-4">
                            <h4 className="overflow-hidden projectText">What We did ?</h4>

                            {data.list.length > 0 ? data.list.map((l) => {
                                return <>
                                    <h6 className="projectText">{l.head}</h6>
                                    <p className="overflow-hidden projectText">{l.content}</p>
                                </>
                            }) : null}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Project