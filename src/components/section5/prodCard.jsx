
function ProdCard(props) {
    return <>
        <div className="card px-4 py-4 my-3 mx-3 d-flex flex-column justify-content-center align-items-center bg-light" role="button" style={{width:"16vw", height:"200px"}}>
            <img src={props.image} width="64px" className="mb-3" />
            <h5 style={{opacity:"0.9"}} className="overflow-hidden" >{props.head}</h5>
            {/* <p style={{ opacity: "0.8" }}>{props.text}</p> */}
            {/* <button className="btn btn-primary text-white me-5" onClick={props.handleClick}>Read More</button> */}
        </div>
    </>
}

export default ProdCard