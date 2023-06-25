import tick from "../../../assets/tick.svg"

function ServiceCard(props) {

    // window.addEventListener("scroll", animate)

    // function animate() {
    //     service()
    // }

    // function service() {
    //     var text = document.getElementsByClassName("service-text")

    //     for (var i = 0; i < text.length; i++) {

    //         var windowHeight = window.innerHeight;
    //         var revealTop = text[i].getBoundingClientRect().top

    //         console.log(revealTop, windowHeight)

    //         if (revealTop < windowHeight - 100)
    //             text[i].classList.add("active")
    //         else
    //             text[i].classList.remove("active")
    //     }
    // }

    return <>
        <div className="card px-4 mx-0 py-4 my-4 text-white serviceCard" style={{ background: props.background }} >
            <img src={tick} width="48px" className="mb-3" />
            <div className="service-text">
                <h4 className="overflow-hidden">{props.head}</h4>
                <p style={{ opacity: "0.8" }}>{props.text}</p>
            </div>
            <div className="d-md-block d-md-flex align-items-end">
                <button className="btn btn-primary mainButton text-white py-2 px-3 align-self-end service-button" style={{ position: "absolute", bottom: "20px" }} onClick={props.handleClick}>Read More</button>
            </div>
        </div>
    </>
}

export default ServiceCard

// 