import Sect1Card from "./sect1Card";
import img1 from "../../assets/image.jpg"

function Section1() {
    return <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row">
                        <img src={img1} width="100vw" height="600" className="image"/>
                        <Sect1Card firstText="Reliable Industrial Solutions"
                            secText="Delivers sustainable solutions and services to various industries. Our partners and client’s value us for the quality of our products and services."
                        />
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                        <img src={img1} width="100vw" height="600" className="image"/>
                        <Sect1Card firstText="Innovative Composite Products"
                            secText="Focus on providing industrial composite products with unique design, precise manufacturing and delivering at high quality."
                        />
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                        <img src={img1} width="100vw" height="600" className="image"/>
                        <Sect1Card firstText="Design, Engineering and Manufacturing"
                            secText="Expertise to offer complete design, engineering, and manufacturing as per client requirement. "
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Section1