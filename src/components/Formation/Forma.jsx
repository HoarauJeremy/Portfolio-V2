// import PresentationBts from "../../pages/PresentationBts";
import Competances from "./Competences";
import Etude from "./Etude";
import Stage from "./Stage";

export default function Forma() {
    return (
        <>
			<div id="formation" className="w-11/12 h-auto mx-auto rounded-md bg-slate-300">
				{/* <PresentationBts /> */}
				
				<div id="etude" className="p-3 mx-auto">
					<div id="titre" className="text-2xl font-bold text-center font-rubik">
						<h2>Mes études</h2>
					</div>
					<Etude />
				</div>

				<div id="Competance" className="w-11/12 p-3 mx-auto">
					<div id="titre" className="text-2xl font-bold text-center font-rubik">
						<h2>Mes competences</h2>
					</div>
					
					<div className="lg:flex lg:justify-around ">
						<Competances />
					</div>
				</div>

				<div id="stage" className="p-3">
					<div id="titre" className="text-2xl font-bold text-center font-rubik">
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