import React from "react"

function About(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <img src="https://i.imgur.com/qE2okvc.png" className="profileImage img-fluid" width="260" height="260" alt="Logo Image" />
                </div>
                <div className="col-4">
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