import CommentChild from './CommentChild.js'

function Comments({comments}){

// props = {comments: []}
// props.comments

//     console.log(comments)
    const commentArray = comments.map((comment) => (
     <CommentChild key={comment.id} user={comment.user} comment={comment.comment}/>
    )
    )
    return (
        <div>
            <button>Hide Comments</button>
            <h2>Comments</h2>
            <p>{commentArray}</p>
        </div>

    )
}
export default Comments;