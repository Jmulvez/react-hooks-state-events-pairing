import React from "react";

function Header({title, views, createdAt, upvotes, downvotes}) {
    return <div>
            <h1>{title}</h1>
            <p> {views} Views | Uploaded: {createdAt}</p>
            <button>{upvotes} 👍</button><button>{downvotes} 👎</button>
            <div>
                <button>
                    Hide Comments
                </button>
            </div>
           </div>
}

export default Header;