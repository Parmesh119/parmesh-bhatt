import React from 'react'

import './Style/education.css'

const education_d = [
    {
        id: 1,
        title: "Bachelor of Technology",
        college: "@ Charusat University",
        year: "Oct 2021 - May 2025",
        score: "8.53 CGPA"
    },
    {
        id: 2,
        title: "HSC",
        college: "@ The Ambika High School, Gadat",
        year: "June 2019 - July 2021",
        score: "87.23 %"
    },
    {
        id: 3,
        title: "SSC",
        college: "@ The Ambika High School, Gadat",
        year: "June 2017 - March 2019",
        score: "87 %"
    }
]

export default function Education() {
    return (
        <div>
            <h1 className='education-heading'>My Education</h1>
            <div className='education-container'>
                {
                    education_d.map((data, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div className='education'>
                                        
                                        <div className='education-title'>
                                            {data.title}
                                        </div>
                                        <div className='education-college'>
                                            {data.college}
                                        </div>
                                        <div className='education-year'>
                                            {data.year}
                                        </div>
                                        <div className='education-score'>
                                            {data.score}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
