import marketing from "../../assets/marketing.svg"

function MarketCard(props) {
    return <>
        <div className="card col-md-10 col-lg-10 shadow-sm my-4 pb-3" role="button">
            <img src={marketing} />
            <h5 className="mt-3 mx-2 overflow-hidden fs-sm-4" style={{opacity:"0.9"}}>{props.text}</h5>
        </div>
    </>
}

export default MarketCard