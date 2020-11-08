import React from "react";
import Pdf from '../assets/Resume.pdf'

function Contact(props) {
    return (
        <div>
            <h3>Contact Info</h3>
            <div class="row transparent contact mt-3">
                <div className="col-sm-12 col-md-4 text-center">
                    <a href="https://github.com/nkleinmann" target="_blank"><i className="fa fa-github fa-4x"></i> </a>
                </div>
                <div className="col-sm-12 col-md-4 text-center">
                    <a href="https://www.linkedin.com/in/nicolekleinmann/" target="_blank"><i
                        className="fa fa-linkedin fa-4x"></i></a>
                </div>
                <div className="col-sm-12 col-md-4 text-center">
                    <a href={Pdf} target="_blank"><i
                        className="far fa-file fa-4x"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;