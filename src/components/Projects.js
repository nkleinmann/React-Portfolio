import React from "react";
import projects from "../utils/projectData";
import Thumbnail from './Thumbnail';
// import './App.css';

function Projects(props) {
    return (
        <div>
            {/* key={props.portfolioInfo.name.toString()} */}
            <div className="row transparent">
                <div className="col-4 text-center">
                    <h4>{props.portfolioInfo.name}</h4>
                    <img src={props.portfolioInfo.image} width="260" height="260" alt={props.portfolioInfo.name} />
                </div>
                    <div className="col-8">
                        <p>{props.portfolioInfo.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default Projects;