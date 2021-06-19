//here we will set up the comments

function Comments({ user, comment, id }) {

    
    return (
        <div>
            <h3 value={id}>{user}</h3>
            <p>{comment}</p>
        </div>
    )

}

export default Comments;