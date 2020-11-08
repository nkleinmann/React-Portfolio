import React from "react";
import projects from "../utils/projectData";
import Thumbnail from './Thumbnail';
// import './App.css';

function Projects(props) {
    return (
        <div>
            {/* key={props.portfolioInfo.name.toString()} */}
            <div className="row">
                <div className="col-12 card text-center border">
                    <img src={props.image} className="card-img-top" alt={props.name} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 className="text-white">{props.name}</h4>
                    <p className="text-white">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;