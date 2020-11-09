import React from "react";
import projects from "../utils/projectData.js";
import Projects from "../components/Projects.js"

function Portfolio(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h3>Projects</h3>
                </div>
            </div>
            <div className="row">
                {projects.map(portfolioInfo => {
                    // console.log(portfolioInfo);
                    return (
                    <Projects key={portfolioInfo.name.toString()} portfolioInfo={portfolioInfo} />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;