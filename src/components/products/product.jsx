import Footer from "../utils/footer"
import Navbar from "../utils/navbar"
import arrow from "../../assets/arrow.svg"
import products from "./productData"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function Product() {

    const [title, setTitle] = useState()
    const [list, setList] = useState([])

    const { product } = useParams()

    useEffect(() => {
        if (products.length > 0) {
            products.map((s) => {
                if (s.name === product) {
                    setTitle(s.name)
                    setList(s.items)
                }
            })
        }
    }, [product])

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return <>
        <Navbar />
        <div className="container my-3">
            <div className="fitContent">
                <h2 className="slideText heading mb-0" >{title}</h2>
                <div className="underline mb-3" />
            </div>

            <ul className="ps-0 serviceUl">
                {list.length > 0 ? list.map((l) => {
                    return <div className="row">
                        <h4 className="overflow-hidden">{l.title}</h4>
                        <p className="overflow-hidden">{l.content}</p>
                    </div>
                }) : null}
            </ul>
        </div>
        <Footer />
    </>
}

export default Product