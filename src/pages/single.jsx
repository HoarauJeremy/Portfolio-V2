import { Link, useLoaderData, useNavigate } from "react-router-dom";

export default function Single() {

    const navigate = useNavigate();
    const data = useLoaderData();
    const post = data.post;

    return (
        <>
            <div className="flex justify-between w-full py-2 mx-auto md:w-3/4">
                <Link 
                    onClick={() => { navigate(-1) }}
                    className="p-2 mx-1 font-semibold text-white bg-gray-700 rounded-md shadow shadow-slate-300 hover:bg-gray-500"
                >Retour</Link>
                <div className="flex">
                    <Link
                        to={ post.id }
                        className="p-2 mx-1 font-semibold text-white bg-gray-700 rounded-md shadow shadow-slate-300 hover:bg-gray-500"
                    >{'<'}Precedent</Link>
                    <Link
                        to={ post.id }
                        className="p-2 mx-1 font-semibold text-white bg-gray-700 rounded-md shadow shadow-slate-300 hover:bg-gray-500"
                    >Suivant&gt;</Link>
                </div>
            </div>
            
            <div className="px-2 pt-2 text-lg rounded-t-none shadow bg-stone-50 shadow-slate-200">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="pl-2">{post.content}</p>
                <br />
                <h4 className="text-lg font-bold">{ (post.soustitre) ? post.soustitre : '' }</h4>
                <p className="pl-2">{ (post.content2) ? post.content2 : '' }</p>
                {Object.entries(post.source).length > 0 && (
                    <div className="w-full p-2 text-sm font-victor">
                        <h4 className="font-semibold underline">Sources:</h4>
                        <ul>
                            {Object.entries(post.source).map(([ sourceName, sourceLink ]) => (
                                <li className="pt-1 md:pt-0" key={sourceName}>
                                    <span className="font-semibold">- {sourceName.toUpperCase()}:</span> <a className="break-words" href={sourceLink} target="_blank" rel="noopener noreferrer">{sourceLink}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}