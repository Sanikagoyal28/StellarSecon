import tick from "../assets/tick.svg"

function SlideCard(props) {
    return <>
        <div class="card shadow px-5 py-5 text-align-left" style={{backgroundColor:"#f8f6f7"}}>
            <img src={tick} width="40px" height="40px" className="mb-4"/>
            <h5 className="mb-4 bg-transparent">{props.heading}</h5>
            <button className="btn btn-primary py-3 text-white">Read More</button>
        </div>
    </>
}

export default SlideCard