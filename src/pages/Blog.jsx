import { Link, useLoaderData } from "react-router-dom"

export default function Blog() {
    const posts = useLoaderData()
    return <>
        <ul>
            {posts.map((post) => (
                <li key={post.id}
                    // className="py-2 my-1 text-lg font-semibold rounded shadow bg-slate-200 dark:bg-slate-800 shadow-slate-50">
                    className="py-2 my-1 text-lg font-semibold rounded shadow bg-slate-200 shadow-slate-50">
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