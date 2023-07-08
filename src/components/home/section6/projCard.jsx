import image from "../../../assets/project.svg"

function ProjCard(props) {
    return <>
        <div className="card bg-none border-0 rounded-0 mx-3 my-3" role="button" style={{ background: "none" }} onClick={props.handleClick}>
            <img src={image} className="mb-2" />
            <div className="d-flex flex-column justify-content-start align-items-start" >
                <h5 className="my-0 mb-2" style={{ opacity: "0.8" }}>Company Name</h5>
                <div className="d-flex justify-content-between" style={{width:"100%"}}>
                    <h5 className="overflow-hidden me-a">{props.head}</h5>
                    <h5 className="my-0">{props.year} </h5>
                </div>
            </div>
        </div>
    </>
}

export default ProjCard