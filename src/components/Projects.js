import React from "react";

function Projects(props) {
    return (
        <div>
            {/* key={props.portfolioInfo.name.toString()} */}
            <div className="row transparent m-3">
                <div className="col-md-4 col-sm-12 text-center">
                <h2>{props.portfolioInfo.name}</h2>
                    <img src={props.portfolioInfo.image} width="260" height="260" alt={props.portfolioInfo.name} />
                </div>
                    <div className="col-md-8 col-sm-12 mt-5">
                        <p>{props.portfolioInfo.description}</p>
                        <h5> Technology used:</h5>
                        <p>{props.portfolioInfo.techUsed}</p>
                        {/* <ul id="techList">
                            {
                            props.portfolioInfo.techUsed.forEach(element => {
                                // console.log(element);
                                let newLiEl = document.createElement("LI");
                                let text = document.createTextNode(element);
                                newLiEl.appendChild(text);
                                // console.log(text);
                                // console.log("break")
                                // console.log(newLiEl);
                                document.getElementById("techList").append(newLiEl);
                            })
                            }
                        </ul> */}
                        <a href={props.portfolioInfo.githubLink} target="_blank">Github Repository</a>
                        <br />
                        <a href={props.portfolioInfo.application} target="_blank">Deployed Site</a>
                    </div>
            </div>
        </div>
    )
}

export default Projects;