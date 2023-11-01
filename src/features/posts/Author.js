import { useSelector } from "react-redux"
import { selectUserById } from "../users/usersSlice"

const Author = ({ userId }) => {
    const author = useSelector(state => selectUserById(state,userId))

    return (
        <span>by {author ? author.name : 'unknown author'}</span>
    )
}

export default Author