import React from 'react'

export default function Sect1Card(props) {
    return <>
        <div className='container'>
            <h5>{props.firstText}</h5>
            <h1>{props.secText}</h1>
            <h4>{props.thirdText}</h4>
            <ul>
                <li>{props.one}</li>
                <li>{props.two}</li>
            </ul>
        </div>
    </>
}
