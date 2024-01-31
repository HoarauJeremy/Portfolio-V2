import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom"
import Index from "./Index"
import Header from "./Header"
import Footer from "./Footer"
import Blog from "../pages/Blog"
import { articles } from "../data/articles copy"
import Single from "../pages/single"
import Veille from "./Veille/Veille"
import Mention from "./Mention"

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
							const postId = parseInt(params.id, 10); // Assurez-vous de convertir l'identifiant en nombre
							const post = articles.find(article => article.id === postId);
							// Gérez le cas où le post n'est pas trouvé, par exemple, redirigez l'utilisateur vers une page d'erreur 404
							return (!post) ? Promise.reject(new Error("Post not found")) : Promise.resolve({ post });
						},
						errorElement: <PageError />
					}
				]
			},
			{
				path: 'mention',
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