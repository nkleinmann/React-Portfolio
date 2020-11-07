import React from "react";

function About(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src="https://i.imgur.com/qE2okvc.png" className="profileImage img-fluid" width="300" height="300" alt="Logo Image" />
                </div>
                <br />
                <div className="col-md-6 col-sm-12 p-3">
                    <p>My name is Nicole Kleinmann and I am currently a Math Curriculum and Content Developer at <a href="https://mathspace.co/us" target="_blank">Mathspace</a>.
                        Prior to working at Mathspace, I was a High School Math and Computer Science teacher for
                        four years. Currently enrolled in a coding bootcamp in full stack web development.
                        <br /><br />
                        I am passionate about math and computer science education, web development, and being active. Outside of work I love running or doing
                        anything outside,playing the piano, and traveling.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;