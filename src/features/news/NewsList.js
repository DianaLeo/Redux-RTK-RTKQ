import { useSelector } from "react-redux"
import { selectNews } from "./newsSlice"

const NewsList = () => {
    const news = useSelector(selectNews)
    console.log(news);

    return (
        <section className='posts-list'>
            {news.map((n,index) => (
            <article className='post-excerpt' key={index}>
                <h2><a href={n.url}>{n.title}</a></h2>
                <p>{n.author} - published at - {n.publishedAt}</p>
            </article>
        ))}
        </section>
    )
}

export default NewsList