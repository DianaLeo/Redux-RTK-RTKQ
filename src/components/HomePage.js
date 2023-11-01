import { useState } from "react"
import AddPostForm from "../features/posts/AddPostForm"
import PostsList from "../features/posts/PostsList"

const HomePage = () => {
    // What is the correct way to get the isAddPostLoading global state?
    const [isAddPostLoading, setIsAddPostLoading] = useState(false)

    return (
        <div>
            <AddPostForm
                setIsAddPostLoading={setIsAddPostLoading} />
            <PostsList
                isAddPostLoading={isAddPostLoading}
            />
        </div>
    )
}

export default HomePage