import marketing from "../../assets/marketing.svg"

function MarketCard(props) {
    return <>
        <div className="card shadow mx-4 my-4 pb-3" role="button">
            <img src={marketing} />
            <h5 className="mt-3 mx-2" style={{opacity:"0.9"}}>{props.text}</h5>
        </div>
    </>
}

export default MarketCard