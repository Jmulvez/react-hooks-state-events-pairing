import React from "react";
import Comment from "./Comments";

function CommentList({ comments }) {
    const getAllComments = comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
    })
    return <div>
            {getAllComments}
           </div>
}

export default CommentList;