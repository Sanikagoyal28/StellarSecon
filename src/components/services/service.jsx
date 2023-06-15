import img1 from "../../assets/image.jpg"
import Footer from "../footer"
import Navbar from "../navbar"
import tick from "../../assets/tick.svg"
import service from "./serviceData"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

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
                console.log(name)
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

    return <>
        <Navbar />
        <div className="container-fluid px-0">
            <div className="row">
                <img src={image} width="100vw" height="600" className="image" />
            </div>
        </div>

        <div className="container my-3">
            <h2 className="slideText mb-3" >{title}</h2>
            <p>{text}</p>
            <h4>{head}</h4>
            <p>{text2}</p>
            <h4>{listHead}</h4>
            <ul className="ps-0">
                {list.length > 0 ? list.map((l) => {
                    return <li className="mb-2"><img src={tick} className="me-2" />{l}</li>
                }) : null}
            </ul>
        </div>
        <Footer />
    </>
}

export default Service