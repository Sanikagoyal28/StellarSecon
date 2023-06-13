import tick from "../../assets/tick.svg"

function ServiceCard(props) {
    return <>
        <div className="card px-4 py-4 my-4" style={{ height: "385px" }}>
            <img src={tick} width="48px" className="mb-3" />
            <h4>{props.head}</h4>
            <p style={{ opacity: "0.8" }}>{props.text}</p>
            <div className="d-md-block d-md-flex align-items-end">
                <button className="btn btn-primary text-white py-2 px-3" onClick={props.handleClick}>Read More</button>
            </div>
        </div>
    </>
}

export default ServiceCard