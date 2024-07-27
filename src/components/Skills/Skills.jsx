import React from 'react'
import "../../../src/pages/styles/about.css";
import "./style/Card1.css"
import "./style/Card2.css"

export default function Skills() {
    return (
        <>
            <div>
                <h1 className="skill-heading">My Skills !</h1>
                <div className="container-skill">
                    {/* Card-1 */}
                    <div className="languages-container">
                        <h3>Languages :</h3>
                        <div className="languages-list">
                            <div className="first_card_1">
                                <button className="language-btn blue">C/C++</button>
                                <button className="language-btn green">Java</button>

                            </div>
                            <button className="language-btn green-1">JavaScript</button>
                            <button className="language-btn green-1">GoLang</button>
                        </div>
                    </div>

                    {/* Card-2 */}
                    <div className="languages-container">
                        <h3>Lib/Framework :</h3>
                        <div className="languages-list">
                            <div className="first_card_1">
                                <button className="language-btn green">NextJs</button>
                                <button className="language-btn blue">ReactJs</button>

                            </div>
                            <button className="language-btn green-1">ExpresJs</button>
                            <button className="language-btn green-1">NodeJs</button>

                            <div className="first_card_2">
                                <button className="language-btn green tailwind">Tailwind CSS</button>
                                <button className="language-btn blue bootstrap">Bootstrap</button>

                            </div>
                        </div>
                    </div>

                    {/* Card-3 */}
                    <div className="languages-container">
                        <h3>Tools :</h3>
                        <div className="languages-list">
                            <div className="first_card_1">
                                <button className="language-btn green">Docker</button>
                                <button className="language-btn blue">Git</button>

                            </div>
                            <button className="language-btn green-1">NPM</button>
                        </div>
                    </div>

                    {/* Card-4 */}
                    <div className="languages-container">
                        <h3>Platforms :</h3>
                        <div className="languages-list">
                            <div className="first_card_1">
                                <button className="language-btn green" style={{
                                    border: "2px solid blue"
                                }}>AWS</button>
                                <button className="language-btn green-1">GitHub</button>
                            </div>
                        </div>
                    </div>

                    {/* Card-5 */}
                    <div className="languages-container">
                        <h3>Databases :</h3>
                        <div className="languages-list">
                            <div className="first_card_1" >
                                <button className="language-btn green">MongoDB</button>
                                <button className="language-btn green-1" style={{
                                    border: "2px solid white"
                                }}>Firebase</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
