// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  console.log('CommentSection', comments);
  const submitComment = (e, txt) => {
    e.preventDefault();
    let newComment = {
      username: 'Liz',
      text: txt
    }
    setComments([...comments, newComment]);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(c => (
        <Comment key={c.username} comment={c} />
      ))}
      <CommentInput submitComment={submitComment} comments={comments} />
    </div>
  );
};

export default CommentSection;
