import React from "react";
import Thumbnail from './Thumbnail';
// import './App.css';

function Projects(props) {
    return (
        <div className="home">
            <br />
            <div className = "transparent">
                <h3>Projects</h3>
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
                <Thumbnail
                    link="/"
                    image=""
                    title="Nicole Kleinmann"
                    category="Profile"
                />
            </div>
        </div>
    )
}

export default Projects;