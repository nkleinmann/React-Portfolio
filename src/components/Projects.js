import React from "react";
import Thumbnail from './Thumbnail';
// import './App.css';

function Projects(props) {
    return (
        <div className="home">
            <div>
                <h1>Projects</h1>
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