import Sect1Card from "./sect1Card";
import slider_1 from "../../../assets/slider_1.svg"
import slider_2 from "../../../assets/slider_2.svg"
import slider_3 from "../../../assets/slider_3.svg"

function Section1() {
    return <>
        <div id="carouselExampleIndicators" className="carousel slide" style={{ marginTop: "70px" }} data-bs-ride="carousel">
            <div className="carousel-indicators bg-transparent">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        {/* <img src={slider_1} width="100vw" className="image" /> */}
                        <div style={{ backgroundImage: `url(${slider_1})` }} className="sliderImage">
                            <Sect1Card firstText="Reliable Industrial Solutions"
                                secText="Delivers sustainable solutions and services to various industries. Our partners and client’s value us for the quality of our products and services."
                            />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row" style={{ height: "fitContent" }}>
                        <div style={{ backgroundImage: `url(${slider_2})` }} className="sliderImage">
                        <Sect1Card firstText="Innovative Composite Products"
                            secText="Focus on providing industrial composite products with unique design, precise manufacturing and delivering at high quality."
                        />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div style={{ backgroundImage: `url(${slider_3})` }} className="sliderImage" >
                            <Sect1Card firstText="Design, Engineering and Manufacturing"
                                secText="Expertise to offer complete design, engineering, and manufacturing as per client requirement. "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-transparent carouselArrow1" aria-hidden="true"></span>
                <span className="visually-hidden bg-transparent">Previous</span>
            </button>
            <button className="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-transparent carouselArrow2" aria-hidden="true"></span>
                <span className="visually-hidden bg-transparent">Next</span>
            </button>
        </div>
    </>
}

export default Section1