import { useState } from "react";
import ShowArticle from "./ShowArticle";

export default function BarVeille() {
    
    const [selectedArticleId, setSelectedArticleId] = useState("article1");

    const showArticle = (articleId) => {

        const sideLinks = document.querySelectorAll('.sidebar .side-menu li a'); // Recupere les element a dans la sidebar 

        sideLinks.forEach(item => {
            const li = item.parentElement;
            item.addEventListener('click', () => {
                sideLinks.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });

        // Ici, vous pouvez ajouter la logique supplémentaire si nécessaire
        console.log("Article ID sélectionné :", articleId);
        setSelectedArticleId(articleId);
    };

    return (
        <div className="veilleTechno-box">
            <div className="sidebar">
                <ul className="side-menu">
                    <li className="active">
                        <a href="#article1" onClick={() => showArticle('article1')}>WebGPU</a>
                    </li>
                    <li>
                        <a href="#article2" onClick={() => showArticle('article2')}>State of CSS</a>
                    </li>
                    <li>
                        <a href="#article3" onClick={() => showArticle('article3')}>WebGPU</a>
                    </li>
                    <li>
                        <a href="#article3" onClick={() => showArticle('article4')}>WebGPU</a>
                    </li>
                    <li>
                        <a href="#article3" onClick={() => showArticle('article5')}>WebGPU</a>
                    </li>
                    <li>
                        <a href="#article3" onClick={() => showArticle('article6')}>WebGPU</a>
                    </li>
                </ul>
            </div>
            <ShowArticle articleId={selectedArticleId} />
        </div>
    )
}