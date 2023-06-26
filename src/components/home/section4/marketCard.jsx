import marketing from "../../../assets/marketing.svg"

function MarketCard(props) {
    return <>
        <div className="card col-md-11 col-sm-11 col-lg-10 marketCard shadow-sm my-4">
            <img className="marketImage" src={marketing} width="100%" height="100%" />
            <h5 className="marketHead text-center overflow-hidden fs-sm-4" style={{opacity:"0.9"}}>{props.text}</h5>
            <button className="btn btn-link" onClick={props.handleClick}>Read More</button>
        </div>
    </>
}

export default MarketCard