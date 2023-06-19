import tick from "../../../assets/tick.svg"

function ServiceCard(props) {
    return <>
        <div className="card px-4 py-4 my-4 text-white serviceCard" style={{ background:props.background }} >
            <img src={tick} width="48px" className="mb-3" />
            <h4 className="overflow-hidden">{props.head}</h4>
            <p style={{ opacity: "0.8" }}>{props.text}</p>
            <div className="d-md-block d-md-flex align-items-end">
                <button className="btn btn-primary mainButton text-white py-2 px-3 align-self-end" style={{position:"absolute", bottom:"20px"}} onClick={props.handleClick}>Read More</button>
            </div>
        </div>
    </>
}

export default ServiceCard

// 