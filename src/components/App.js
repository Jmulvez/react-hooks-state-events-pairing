import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentList comments={video.comments} id={video.comments.id} user={video.comments.user} comment={video.comments.comment}/>
    </div>
  );
}

export default App;