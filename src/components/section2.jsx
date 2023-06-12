import tick from "../assets/tick.svg"
import SlideCard from "./slideCard"
import about from "../assets/about_1.svg"

function Section2() {
    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 col-sm-12 me-3" >
                    <img className="shadow" src={about} height="680px" />
                </div>
                <div className="col-md-7 col-sm-12">
                    <p className="orangeText">Welcome To The World Of SECON, Where Innovation, Durability, And Sustainability Come Together To Provide Comprehensive Composite Solutions For Your Business Needs.</p>
                    <h2 className="mb-3 blackText">Experience The Power Of Innovative And Sustainable Composite Solutions With SECON.</h2>
                    <p className="fs-6 fw-normal lh-base" style={{ opacity: 0.8 }}>SECON Offers Comprehensive Composite Solutions That Combine Innovation And Sustainability To Meet The Unique Needs Of Your Business. Our Cutting-Edge Products Are Engineered To Provide Unmatched Durability, Enabling You To Operate In Even The Toughest Environments. Welcome To SECON, Where We Deliver Powerful Solutions That Transform The Way You Do Business.</p>
                    <div className="row py-2">
                        <div className="col-md-6 me-4">
                            <p className="fs-4" style={{ fontWeight: 500 }}>SECON Provides Comprehensive Composite Solutions For A Wide Range Of Industries</p>
                            <ul className="fs-6 ps-0 ulList">
                                <li className="mb-2"><img src={tick} className="me-2" /> Advanced Technology And Facilities</li>
                                <li className="mb-2"><img src={tick} className="me-2" /> Tailored Solutions For Clients</li>
                                <li className="mb-2"><img src={tick} className="me-2" /> Rapid Research And Development</li>
                                <li className="mb-2"><img src={tick} className="me-2" /> Quality And Sustainability Commitment</li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <SlideCard heading="Sustainable Manufacturing Practices" />
                                    </div>
                                    <div class="carousel-item">
                                        <SlideCard heading="Experienced Industry Professionals" />
                                    </div>
                                    <div class="carousel-item">
                                        <SlideCard heading="On-time Delievery Assurance" />
                                    </div>
                                    <div class="carousel-item">
                                        <SlideCard heading="Quality Driven Solutions" />
                                    </div>
                                    <div class="carousel-item">
                                        <SlideCard heading="Innovative Composite Engineering" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Section2