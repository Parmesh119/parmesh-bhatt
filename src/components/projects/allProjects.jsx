import React from "react";
import { Link } from "react-router-dom";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
						/>
					</div>
				))}
			</div>
			<Link to="https://www.linkedin.com/in/parmesh-bhatt/details/projects/" target="_blank" style={{
				textDecoration: "none",
			}}><button className="right-aligned-button-project" >More Projects</button></Link>
		</>
	);
};

export default AllProjects;
