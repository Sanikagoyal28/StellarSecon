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

    console.log(products)
    useEffect(() => {
        if (products.length > 0) {
            products.map((s) => {
                if (s.name === product) {
                    console.log(s)
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
     <div className="bodyWrapper">
        <Navbar />
        <div style={{ flexGrow: 1 }}>
        <div className="container-lg my-5">
            <div className="fitContent mt-5 mb-4">
                <h2 className="slideText heading mb-0" >{title}</h2>
                <div className="underline mb-4" />
            </div>

            <ul className="ps-0 serviceUl">
                {list.length > 0 ? list.map((l) => {
                    return <div className="row mb-4 px-sm-3 px-md-0 px-lg-0 justify-content-center align-items-center">
                        <div className="col-md-6 me-4">
                            <img className="me-3" src={arrow} width="22px" />
                            <div className="ms-md-4.5 ms-sm-4 mt-n4">
                                <h4 className="overflow-hidden">{l.title}</h4>
                                <p className="overflow-hidden">{l.content}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-md-5 px-0 col-sm-10 ms-lg-5 ms-md-1 ms-sm-0">
                            <img src={l.image} width="360px" />
                        </div>
                    </div>
                }) : null}
            </ul>
        </div>
        </div>
        <Footer />
        </div>
    </>
}

export default Product