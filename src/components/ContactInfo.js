import React from "react";

function Contact(props) {
    return (
        <div className="home">
            <h1>Contact Info</h1>
            <div class="row">
                        <div className="col-sm-12 col-md-4 text-center">
                            <a href="https://github.com/nkleinmann" target="_blank"><i className="fa fa-github fa-3x"></i> </a>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <a href="https://www.linkedin.com/in/nicolekleinmann/" target="_blank"><i
                                    className="fab fa-linkedin fa-3x"></i></a>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <a href="./Images/NK2020resume.pdf" target="_blank"><i
                                    className="far fa-file fa-3x"></i></a>
                        </div>
                    </div>
        </div>
    )
}

export default Contact;