import React from "react";

function About(props) {
    return (
        <div className="about">
            <div className="row">
                <div className="col-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <br />
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <img src="https://i.imgur.com/qE2okvc.png" className="profileImage img-fluid" width="300" height="300" alt="Logo Image" />
                </div>
                <br />
                <div className="col-md-6 col-sm-12 p-3">
                    <p>My name is Nicole Kleinmann and I just completed a coding bootcamp in full stack web development. I am currently a Math Curriculum and Content Developer at <a href="https://mathspace.co/us" target="_blank">Mathspace</a>.
                        Prior to working at Mathspace, I was a High School Math and Computer Science teacher for
                        four years.
                        <br /><br />
                        I am passionate about math and computer science education, web development, and being active. Outside of work I love running or doing
                        anything outside (especially by the ocean), playing the piano, and traveling.
                    </p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.6" d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}

export default About;