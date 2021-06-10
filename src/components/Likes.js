import React, {useState} from 'react'

function Likes(props){
    const [likes, setLiked] = useState(props.upvoted);
    const [downvotes, setDownvotes] = useState(props.downvotes);
    // const [isLiked, setLiked] = useState(0);
    // isLiked = 2

    function handleLikes(e){
        setLiked(likes => likes + 1)
    }
    function handleDownLikes(e){
        setDownvotes(downvotes => downvotes + 1)
    }

    return(
        <div>
            <button onClick={handleLikes}>{likes} 👍</button>
            <button onClick={handleDownLikes}>{downvotes} 👎</button>
        </div>
    )
}
export default Likes;