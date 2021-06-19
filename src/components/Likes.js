//this is where we will set up likes

import React, {useState} from "react";
//need state here


function Likes({ toggleComments, commentsOn }) {
    const [thumbsUp, setThumpsUp] = useState(1500) // set the thumbs state
    const [thumbsDown, setThumbsDown] = useState(50) // set the thumbs down state

    function handleClickThumbsUp() {
        //sets the function to increase thumbs up count
        setThumpsUp(thumbsUp + 1)
    }

    function handleClickThumbsDown() {
        //sets the function to increase thumbs down count
        setThumbsDown(thumbsDown + 1)
    }

    function handleClickComments() {
        toggleComments(commentsOn)
    }



    return (
        <div>
            <p>
                <span><button onClick={handleClickThumbsUp}>{thumbsUp} 👍</button></span>
                <span><button onClick={handleClickThumbsDown}>{thumbsDown} 👎</button></span>
            </p>

            <p><button onClick={handleClickComments}>{commentsOn ? "Hide Comments" : "Show Comments"}</button></p>
            <hr/>
        </div>
    )

}

export default Likes;