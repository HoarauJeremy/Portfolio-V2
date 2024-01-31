import { articles } from "../../data/articles copy"

export default function ShowArticle({ articleId }) {
    const selectedArticle = articles[articleId];
    return (
        <div className="article-box">
            <div className="article-content">
                <h2>{selectedArticle.title}</h2>
                <p>{selectedArticle.content}</p>
                <h3>{selectedArticle.soustitre}</h3>
                <p>{selectedArticle.content2}</p>
                {/* <p>{selectedArticle.source}</p> */}
            </div>
        </div>
    )
}