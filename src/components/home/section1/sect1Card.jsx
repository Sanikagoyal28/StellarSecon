import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

export default function Sect1Card(props) {
    return <>
        <div className='container bg-transparent px-5 py-5 ms-md-5 ms-lg-5 ms-xl-5 ms-sm-3'>
            <div className='row bg-transparent'>
                <div className='col-sm-11 col-md-9 col-lg-7 bg-transparent'>
                    <p className='bg-transparent mb-4 slideText' style={{lineHeight:"84px"}}>{props.firstText}</p>
                    <h4 className='bg-transparent mb-3 overflow-hidden fefefe' >{props.secText}</h4>
                    <button className='btn btn-primary px-3 py-2 text-white mainButton'>Learn More
                    <FontAwesomeIcon className="ms-1" style={{fontSize:"14px"}} icon={faAnglesRight} />
                    </button>
                </div>
            </div>
        </div>
    </>
}


//  style={{ position: "absolute", top: "90px" }}