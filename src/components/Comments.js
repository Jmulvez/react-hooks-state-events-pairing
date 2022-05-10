import React from "react";

function Comment({ id, user, comment, comments }) {
    const renderOneComment = comments.map((comment) => {
        return <div>
                {comment}
               </div>
    })
    return <div> {id}
            <h3>{user}</h3>
            <p>{comment}</p>
            <div>
                {renderOneComment}
            </div>
           </div>

}

export default Comment;