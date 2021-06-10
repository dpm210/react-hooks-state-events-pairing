import React from "react"

function Video(props){
    return (
        <div className="videoDiv">
            <iframe 
                src= {props.embedUrl}
                width="919"
                height="525"
                frameborder="0"
                allowfullscreen
            />
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.uploaded}</p>
        </div>
    )
}
export default Video