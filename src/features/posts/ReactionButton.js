import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    //hooray: '🎉',
    heart: '❤️',
    //rocket: '🚀',
    eyes: '👀'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const onClickHandler = (id, name) => {
        // when parameters and arguments don't have same names, have to write both
        dispatch(reactionAdded({ postId: id, reactionName: name }))
    }

    return (
        <>
            {Object.entries(reactionEmoji).map(([name, emoji]) => {
                return (<button
                    key={name}
                    className="muted-button reaction-button"
                    onClick={() => onClickHandler(post.id, name)}
                >
                    {emoji} {post.reactions[name]}
                </button>)
            })}
        </>
    )
}

export default ReactionButtons