import Competances from "./Competences";
import Etude from "./Etude";
import Stage from "./Stage";

export default function Forma() {
    return (
        <>
			<div id="formation" className="w-full h-auto bg-blue-500">
				<div id="etude" className="bg-white w-11/12 mx-auto p-3">
					<div id="titre" className="font-bold text-2xl font-rubik text-center">
						<h2>Mes études</h2>
					</div>
					<Etude />
				</div>

				<div id="Competance" className="bg-white w-11/12 mx-auto p-3">
					<div id="titre" className="font-bold text-2xl font-rubik text-center">
						<h2>Mes competences</h2>
					</div>
					
					<div className="lg:flex lg:justify-around ">
						<Competances />
					</div>
				</div>

				<div id="stage" className="bg-white w-11/12 mx-auto p-3">
					<div id="titre" className="font-bold text-2xl font-rubik text-center">
						<h2>Mes Stage</h2>
					</div>
					<div className="w-full h-auto md:flex md:justify-around md:items-center">
						<Stage />
					</div>
				</div>

			</div>
			
		</>
    )
}