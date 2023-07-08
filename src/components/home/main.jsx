import React, { useEffect } from 'react'
import Section1 from './section1/section1'
import Section2 from './section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Footer from '../utils/footer'
import Navbar from '../utils/navbar'

export default function Main() {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    return <>
        <div className='bodyWrapper'>
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 /> */}
                <Section6 />
            </div>
            <Footer />
        </div>
    </>
}
