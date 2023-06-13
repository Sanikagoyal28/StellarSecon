import React from 'react'

export default function Sect1Card(props) {
    return <>
        <div className='container bg-transparent text-white px-5 py-5' style={{ position: "absolute", top: "100px" }}>
            <div className='row bg-transparent'>
                <div className='col-md-7 bg-transparent'>
                    <p className='bg-transparent mb-4 slideText'>{props.firstText}</p>
                    <h4 className='bg-transparent mb-3' style={{ opacity: "0.85" }}>{props.secText}</h4>
                    <button className='btn btn-primary px-3 py-2'>Learn More</button>
                </div>
            </div>
        </div>
    </>
}
