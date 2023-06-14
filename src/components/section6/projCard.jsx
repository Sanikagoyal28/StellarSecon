import image from "../../assets/project.png"

function ProjCard(props) {
    return <>
        <div className="card bg-none border-0 rounded-0 mx-3 my-3" style={{background :"none"}}>
            <img src={image} className="mb-2" />
            <div className="d-flex flex-column justify-content-center align-items-center px-2 text-center" >
                <h5 className="overflow-hidden">{props.head}</h5>
                <p className="text-center my-2 mx-4" style={{opacity:0.95}}>{props.scope}</p>
                <p className="my-0" style={{fontSize:"0.95rem"}}>{props.year}</p>
                <p style={{fontSize:"0.95rem"}}>{props.status}</p>
            </div>
        </div>
    </>
}

export default ProjCard