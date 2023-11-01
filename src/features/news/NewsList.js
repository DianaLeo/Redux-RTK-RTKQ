import { useDispatch, useSelector } from "react-redux"
import { fetchNews, selectNews } from "./newsSlice"
import { useEffect } from "react"

const NewsList = () => {
    const dispatch = useDispatch()
    const news = useSelector(selectNews)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return (
        <section className='posts-list'>
            {news.map((n, index) => (
                <article className='post-excerpt' key={index}>
                    <h2><a href={n.url}>{n.title}</a></h2>
                    <p>{n.author} - published at - {n.publishedAt}</p>
                </article>
            ))}
        </section>
    )
}

export default NewsList