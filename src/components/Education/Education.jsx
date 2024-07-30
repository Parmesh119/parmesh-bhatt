import React from 'react'

import './Style/education.css'

export default function education1() {
    return (
        <>
            <div>
                <h1 className='education-heading'>My Education</h1>
                <div className='education-container'>
                        <span className='first'>
                            <div>🎓 Bachelor of Technology</div>
                            <div>@ Charusat University</div>
                            <div>Oct 2021 - May 2025</div>
                            <div>8.53 CGPA</div>
                        </span>
                        <span className='first'>
                            <div>HSC</div>
                            <div>@ The Ambika High School, Gadat</div>
                            <div>June 2019 - July 2021</div>
                            <div>87.23 %</div>
                        </span>
                        <span className='first'>
                            <div>SSC</div>
                            <div>@ The Ambika High School, Gadat</div>
                            <div>June 2017 - March 2019</div>
                            <div>87 %</div>
                        </span>
                    </div>
            </div>
        </>
    )
}
