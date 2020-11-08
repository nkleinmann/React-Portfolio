import React from "react";

function Contact(props) {
    return (
        <div className="home">
            <h3>Contact Info</h3>
            <div class="row transparent">
                <div className="col-12 text-center">
                    <a href="https://github.com/nkleinmann" target="_blank"><i className="fa fa-github fa-3x"></i> </a>
                </div>
                <div className="col-12 text-center">
                    <a href="https://www.linkedin.com/in/nicolekleinmann/" target="_blank"><i
                        className="fab fa-linkedin fa-3x"></i></a>
                </div>
                {/* <div className="col-sm-12 col-md-4 text-center">
                    <a href="./assets/NKResume.pdf" target="_blank"><i
                        className="far fa-file fa-3x"></i></a>
                </div> */}
            </div>
        </div>
    )
}

export default Contact;