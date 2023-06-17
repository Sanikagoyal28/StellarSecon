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

    return <>
        <Navbar />
        <Carousel image={image} />

        <div className="container my-3">
            <div className="fitContent">
                <h2 className="slideText heading mb-0" >{title}</h2>
                <div className="underline mb-3" />
            </div>
            <p className="overflow-hidden">{text}</p>
            <ol className="ps-0" style={{listStylePosition:"inside"}}>
                {list.length > 0 ? list.map((l) => {
                    return <li className="mb-2">
                        {/* <img src={arrow} className="me-2" width="24px" /> */}
                        <div style={{marginLeft:"22px", marginTop:"-28px"}}>
                        <h4 className="overflow-hidden mb-1">{l.head}</h4>
                        <p className="overflow-hidden">{l.content}</p>
                        </div>
                    </li>
                }) : null}
            </ol>
        </div>

        <Footer />
    </>
}

export default Sectors