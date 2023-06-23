

function Carousel(props) {
    return <>
        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators bg-transparent">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                    <img src={props.image} width="100vw" height="600" className="image" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                    <img src={props.image} width="100vw" height="600" className="image" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <img src={props.image} width="100vw" height="600" className="image" />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-transparent" style={{left:"-20px"}} aria-hidden="true"></span>
                <span className="visually-hidden bg-transparent" style={{left:"-20px"}} >Previous</span>
            </button>
            <button className="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-transparent" aria-hidden="true"></span>
                <span className="visually-hidden bg-transparent">Next</span>
            </button>
        </div>
    </>
}

export default Carousel