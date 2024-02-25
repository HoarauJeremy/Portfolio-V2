// import { useRouteError } from "react-router-dom"

export default function Error() {
	// const error = useRouteError()
	return ( 
        <div className="flex items-center justify-center w-full h-56 sm:h-80 font-rubik">
            <div className="w-full text-center sm:w-2/3 h-3/4">
                <div className="flex flex-col items-center justify-center w-3/4 px-2 py-1 mx-auto my-4 rounded-md shadow h-2/3 bg-slate-50 border-slate-800 shadow-slate-300">
                <h1 className="text-5xl">Erreur 404</h1>
                    <p>
                        {/* {error?.error?.toString() ?? error?.toString()} */}
                        Page non trouvée
                    </p>
                </div>
            </div>
        </div>
	)
}