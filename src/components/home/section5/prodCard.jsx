
function ProdCard(props) {
    return <>
        <div className="card prodCard px-4 py-4 d-flex flex-column justify-content-center align-items-center bg-light" role="button" onClick={props.handleClick}>
            <img src={props.image} width="82px" className="mb-3" />
            <h5 style={{opacity:"0.9", position:"absolute", bottom:"20px"}} className="overflow-hidden text-center" >{props.head}</h5>
            {/* <p style={{ opacity: "0.8" }}>{props.text}</p> */}
            {/* <button className="btn btn-primary text-white me-5" onClick={props.handleClick}>Read More</button> */}
        </div>
    </>
}

export default ProdCard