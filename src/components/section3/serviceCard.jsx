import tick from "../../assets/tick.svg"

function ServiceCard (props){
    return <>
        <div className="card px-4 py-4 mb-4" style={{height:"365px"}}>
            <img src={tick}  width="48px" className="mb-3"/>
            <h4>{props.head}</h4>
            <p style={{opacity:"0.8"}}>{props.text}</p>
            <button className="btn btn-primary text-white me-5" onClick={props.handleClick}>Read More</button>
         </div>
    </>
}

export default ServiceCard