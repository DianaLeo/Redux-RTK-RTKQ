import { useSelector } from "react-redux"

const Author = ({ userId }) => {
    const author = useSelector(state => state.users.find(user => user.id === userId))

    return (
        <span>by {author ? author.name : 'unknown author'}</span>
    )
}

export default Author