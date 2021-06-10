import React from "react"
import video from "../data/video.js";
import Video from "./Video.js"
import Likes from "./Likes.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className='App'>
      <Video 
      embedUrl={video.embedUrl}
      title={video.title}
      views={video.views}
      uploaded={video.createdAt}
      />
    <Likes 
    upvoted={video.upvotes}
    downvotes={video.downvotes}/>
    <Comments 
    comments={video.comments} />
    </div>



  );
}

export default App;
