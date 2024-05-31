import { Link, useLoaderData } from "react-router-dom"
// import PresentationVeilleT from "./PresentationVeilleT";

export default function Blog() {
    const posts = useLoaderData()
    const postsDesc = posts.sort((a,b) => b.id - a.id);
    return <>
        {/* <PresentationVeilleT /> */}
        <ul>
            {postsDesc.map((post) => (
                <li key={post.id}
                    className="flex items-center py-2 my-1 text-lg font-semibold rounded shadow font-victor bg-slate-200 shadow-slate-50 hover:bg-slate-300">
                        <span className="pr-2 ml-2 border-r border-black">{post.categorie}</span>
                    <Link 
                        to={`${post.id}`}
                        className={'w-full h-fit p-2 inline-block'}>
                            {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    </>
}   

