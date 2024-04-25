import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Index from "./Index"
import Header from "./Header"
import Footer from "./Footer"
import Blog from "../pages/Blog"
import { articles } from "../data/articles"
import Single from "../pages/single"
import Veille from "./Veille/Veille"
import Mention from "./Mention"
import Error from "../pages/Error"
import Documents from "./Documents"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Index />},
			{
				path: 'veille',
				element: <Veille />,
				children: [
					{
						path: '',
						element: <Blog/>,
						loader: () => articles,
						errorElement: <Error />
					},
					{
						path: ':id',
						element: <Single />,
						loader: ({ params }) => {
							const postId = parseInt(params.id, 10); // Convertie l'identifiant en nombre
							const post = articles.find(article => article.id === postId);
							return (!post) ? Promise.reject(new Error("Post not found")) : Promise.resolve({ post });
						},
						errorElement: <Error />
					}
				]
			},
			{
				path: 'documents',
				element: <Documents />,
				errorElement: <Error />
			},
			{
				path: 'MentionLegale',
				element: <Mention />
			}
		]
	},
]);

function Root() {
	return <>
		<Header/>
			<Outlet/>
		<Footer/>
	</>
}

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}

export default App
