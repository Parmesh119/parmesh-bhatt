import React from "react";
import { Link } from "react-router-dom";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<h2><div className="works-body">
						<div className="work">
							<img
								src="./ACC.png"
								alt="AWS Cloud Club Charusat"
								className="work-image"
							/>
							<div className="work-title">AWS Cloud Club Charusat</div>
							<div className="work-subtitle">
								Cloud Captain
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./DeCodeCafe.png"
								alt="DeCodeCafe Community"
								className="work-image"
							/>
							<div className="work-title">DeCodeCafe Community</div>
							<div className="work-subtitle">
								Lead of Website Development Team
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./CLDC.png"
								alt="CLDC - Charusat"
								className="work-image"
							/>
							<div className="work-title">CLDC - Charusat</div>
							<div className="work-subtitle">
								Cloud Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
						<Link to="https://www.linkedin.com/in/parmesh-bhatt/details/experience/" target="_blank" style={{
									textDecoration: "none",
								}}><button className="right-aligned-button-work" >More details</button></Link>
					</div>
					</h2>
				}
			/>
		</div>
	);
};

export default Works;
