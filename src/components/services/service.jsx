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

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <Carousel image={image} />

        <div className="container my-3">
            <h2 className="slideText heading mb-0" >{title}</h2>
            <div className="underline mb-3" />
            <p className="overflow-hidden">{text}</p>
            {head != '' || head != undefined ? <h4 className="overflow-hidden">{head}</h4> : null}
            {text2 != '' || text2 != undefined ? <p className="overflow-hidden">{text2}</p> : null}
            <h4 className="overflow-hidden">{listHead}</h4>
            <ul className="ps-0">
                {list.length > 0 ? list.map((l) => {
                    return <li className="mb-2"><img src={tick} className="tick me-2" />{l}</li>
                }) : null}
            </ul>
        </div>
        <Footer />
    </>
}

export default Service