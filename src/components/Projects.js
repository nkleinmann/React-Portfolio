import React from "react";
import Thumbnail from './Thumbnail';
// import './App.css';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <Thumbnail
            link="/"
            image="https://i.imgur.com/qE2okvc.png"
            title="Nicole Kleinmann"
            category="Profile"
            />
        </div>
    )
}

export default Projects;