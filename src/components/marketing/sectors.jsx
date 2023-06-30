import { useParams } from "react-router"
import sectors from "./sectorData"
import { useEffect, useState } from "react"
import Navbar from "../utils/navbar"
import Footer from "../utils/footer"
import arrow from "../../assets/arrow.svg"
import Carousel from "../utils/carousel"

function Sectors() {

    const [title, setTitle] = useState()
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [list, setList] = useState([])

    const { sector } = useParams()

    useEffect(() => {
        if (sectors.length > 0) {
            sectors.map((s) => {
                if (s.title === sector) {
                    setTitle(s.title)
                    setText(s.text)
                    setImage(s.image.image)
                    setList(s.list)
                }
            })
        }
    }, [sector])

    function animate() {
        reveal()
    }

    function reveal() {
        var zero = document.getElementsByClassName("serviceText0")[0]
        var one = document.getElementsByClassName("serviceText1")[0]
        var two = document.getElementsByClassName("serviceText2")
        var three = document.getElementsByClassName("serviceText3")

        var windowHeight = window.innerHeight;
        var top0 = zero.getBoundingClientRect().top
        var top1 = one.getBoundingClientRect().top

        if (top0 < windowHeight ) {
            zero.classList.add("active")
        }
        else {
            zero.classList.remove("active")
        }

        if (top1 < windowHeight + 50) {
            one.classList.add("active")
        }
        else {
            one.classList.remove("active")
        }

        for (var i = 0; i < two.length; i++) {
            var top2 = two[i].getBoundingClientRect().top
            if (top2 < windowHeight + 75) {
                two[i].classList.add("active")
            }
            else {
                two[i].classList.remove("active")
            }
        }

        for (var i = 0; i < three.length; i++) {
            var top3 = two[i].getBoundingClientRect().top
            if (top3 < windowHeight + 100) {
                three[i].classList.add("active")
            }

            else {
                three[i].classList.remove("active")
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
            <div style={{ flexGrow: 1 }}>
                <Carousel image={image} />

                <div className="container my-3">
                    <div className="fitContent serviceText0">
                        <h2 className="slideText heading mb-0" >{title}</h2>
                        <div className="underline mb-3" />
                    </div>
                    <p className="overflow-hidden serviceText1">{text}</p>
                    <ol className="ps-0" style={{ listStylePosition: "inside" }}>
                        {list.length > 0 ? list.map((l) => {
                            return <li className="mb-2">
                                {/* <img src={arrow} className="me-2" width="24px" /> */}
                                <div style={{ marginLeft: "22px", marginTop: "-28px" }}>
                                    <h4 className="overflow-hidden mb-1 serviceText2">{l.head}</h4>
                                    <p className="overflow-hidden serviceText3">{l.content}</p>
                                </div>
                            </li>
                        }) : null}
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Sectors