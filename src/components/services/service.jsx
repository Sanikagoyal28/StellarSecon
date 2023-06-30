import img1 from "../../assets/image.jpg"
import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import tick from "../../assets/tick.svg"
import service from "./serviceData"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Carousel from "../utils/carousel"

function Service() {

    const [title, setTitle] = useState()
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [head, setHead] = useState("")
    const [image, setImage] = useState("")
    const [listHead, setListhead] = useState("")
    const [list, setList] = useState([])

    const { name } = useParams()

    useEffect(() => {
        if (service.length > 0) {
            service.map((s) => {
                if (s.title === name) {
                    setTitle(s.title)
                    setText(s.text)
                    setImage(s.image.image)
                    setText2(s.text2)
                    setHead(s.head)
                    setListhead(s.listHead)
                    setList(s.list)
                }
            })
        }
    }, [name])

    function animate() {
        reveal()
    }

    function reveal() {
        var zero = document.getElementsByClassName("serviceText0")[0]
        var one = document.getElementsByClassName("serviceText1")[0]
        var two = document.getElementsByClassName("serviceText2")[0]
        var three = document.getElementsByClassName("serviceText3")[0]
        var four = document.getElementsByClassName("serviceText4")[0]
        var five = document.getElementsByClassName("serviceText5")

        var windowHeight = window.innerHeight;
        var top0 = zero.getBoundingClientRect().top
        var top1 = one.getBoundingClientRect().top
        var top2 = two.getBoundingClientRect().top
        var top3 = three.getBoundingClientRect().top
        var top4 = four.getBoundingClientRect().top

        if (top0 < windowHeight) {
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

        if (top2 < windowHeight + 75) {
            two.classList.add("active")
        }
        else {
            two.classList.remove("active")
        }

        if (top3 < windowHeight + 100) {
            three.classList.add("active")
        }
        else {
            three.classList.remove("active")
        }
        if (top4 < windowHeight + 125) {
            four.classList.add("active")
        }
        else {
            four.classList.remove("active")
        }

        for (var i = 0; i < five.length; i++) {
            var top5 = five[i].getBoundingClientRect().top
            if (top5 < windowHeight + 150) {
                five[i].classList.add("active")
            }

            else {
                five[i].classList.remove("active")
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
                    {head != '' || head != undefined ? <h4 className="overflow-hidden serviceText2">{head}</h4> : null}
                    {text2 != '' || text2 != undefined ? <p className="overflow-hidden serviceText3">{text2}</p> : null}
                    <h4 className="overflow-hidden serviceText4">{listHead}</h4>
                    <ul className="ps-0" style={{ listStyle: "none" }}>
                        {list.length > 0 ? list.map((l) => {
                            return <li className="mb-2 serviceText5"><img src={tick} width="18px" className="tick me-2" />
                                <div className="ms-md-4.5 ms-sm-4 mt-n4">{l}</div></li>
                        }) : null}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Service