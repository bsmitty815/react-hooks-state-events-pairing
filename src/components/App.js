import video from "../data/video.js";
import Videos from "./Videos";
import Comments from "./Comments";
import Likes from "./Likes"
import React, { useState } from "react";

function App() {
  const [commentsOn, setCommentsOn] = useState(true)

  function toggleComments(callbackCommentsOn) {
    setCommentsOn((callbackCommentsOn) => !callbackCommentsOn)
  }
  console.log(commentsOn)

  return (
    <div className="App">
      <Videos
        embed={video.embedUrl}
        createdAt={video.createdAt}
        title={video.title}
        views={video.views}
      />
      <Likes toggleComments={toggleComments} commentsOn={commentsOn}/>
      <div style={ commentsOn ? {'display': 'block'} : {'display': 'none'}}>
        <p>{video.comments.length} Comments</p>
        {video.comments.map((data) => (
          <Comments
            key={data.id}
            id={data.id}
            comment={data.comment}
            user={data.user}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
