import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom"
import Index from "./Index"
import Header from "./Header"
import Footer from "./Footer"
import Blog from "../pages/Blog"
import { articles } from "../data/articles copy"
import Single from "../pages/single"
import Veille from "./Veille/Veille"
import Mention from "./Mention"
import Contact from "./Contact"
import Viewer from "./CV/Viewer"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <PageError />,
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
						errorElement: <PageError />
					},
					{
						path: ':id',
						element: <Single />,
						loader: ({ params }) => {
							const postId = parseInt(params.id, 10); // Convertie l'identifiant en nombre
							const post = articles.find(article => article.id === postId);
							return (!post) ? Promise.reject(new Error("Post not found")) : Promise.resolve({ post });
						},
						errorElement: <PageError />
					}
				]
			},
			{
				path: 'contact',
				element: <Contact/>
			},
			{
				path: 'CV',
				element: <Viewer />,
				errorElement: <PageError />
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

function PageError() {
	const error = useRouteError()
	return ( 
		<>
			<div>
				<h1>Erreur</h1>
				<p>
					{error?.error?.toString() ?? error?.toString()}
				</p>
			</div>
		</>
	)
}

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}

export default App
