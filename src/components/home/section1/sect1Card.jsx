import React from 'react'

export default function Sect1Card(props) {
    return <>
        <div className='container bg-transparent text-white px-5 py-5' style={{ position: "absolute", top: "90px" }}>
            <div className='row bg-transparent'>
                <div className='col-sm-11 col-md-9 col-lg-7 bg-transparent'>
                    <p className='bg-transparent mb-4 slideText' style={{lineHeight:"84px"}}>{props.firstText}</p>
                    <h4 className='bg-transparent mb-3 overflow-hidden fefefe' >{props.secText}</h4>
                    <button className='btn btn-primary px-3 py-2 text-white mainButton'>Learn More</button>
                </div>
            </div>
        </div>
    </>
}
