export default function Formation() {
    return (
        <>
			<div id="Formation" className="text-white bg-blue-950 w-full h-screen md:flex">
				<div id="etude" className="bg-slate-950 w-full md:w-3/6 h-5/6">
					<div id="titre" className='h-16 w-3/4 m-auto flex justify-center items-center bg-blue-900'>
						<h2 className="text-4xl font-rubik">Mes études</h2>
					</div>
					<dl>
						<div className='mx-auto w-11/12 bg-slate-600 grid-cols-2 grid-rows-4 gap-5'>
							<div id='Forma-etude div1' className="p-1 border-2 w-full flex flex-col justify-center text-lg">
								<dt className="font-bold">2eme années de BTS Service Informatique aux Organisation option SLAM (Solutions Logicielles et Applications Métiers) :</dt>
								<dd className="text-base">- Année : 2023/2024</dd>
							</div>
							<div id='Forma-etude div2' className="p-1 border-2 w-full flex flex-col justify-center text-lg">
								<dt className="font-bold ">1er années de BTS Service Informatique aux Organisation :</dt>
								<dd className="text-base">- Année : 2022/2023</dd>
							</div>
							<div id='Forma-etude div3' className="p-1 border-2 w-full flex flex-col justify-center text-lg">
								<dt className="font-bold">BTS Système Numérique option E.C. (Électronique et Communication) :</dt> 
								<dd className="text-base">- Année : 2020/2022</dd>
							</div>
							<div id='Forma-etude div4' className="p-1 border-2 w-full flex flex-col justify-center text-lg">
								<dt className="font-bold">Bac professionnelle Système Numérique option RISC (Réseau Informatique et Système Communicant) :</dt>
								<dd className="text-base">- Année : 2017/2020</dd>
							</div>
						</div>
					</dl>
				</div>

				<div id="Competance" className="bg-red-950 md:w-3/6 h-5/6">
					<div className="bg-slate-950 rounded-2xl w-5/6 lg:w-3/4 h-auto py-3 mx-auto px-4">
						<div id="titre" className='h-16 w-3/4 m-auto flex justify-center items-center'>
							<h2 className="text-2xl sm:text-4xl font-rubik">Mes competences</h2>
						</div>
						
						<div id='comp-liste' className="bg-slate-900 border-slate-800 border-4 mt-2 rounded-md">
							<div id='comp-titre' className="py-1 sm:pl-3">
								<h3 className="text-2xl text-center sm:text-left underline">Langages de programation</h3>
							</div>
							<ul className="grid grid-cols-2 lg:flex lg:justify-between p-6 md:p-9 lg:p-12 ">
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-html5 fa-2xl text-4xl lg:text-5xl"></i>
								</li>
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-css3 fa-2xl text-4xl lg:text-5xl"></i>
								</li>
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-js fa-2xl text-4xl lg:text-5xl"></i>
								</li>
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-php fa-2xl text-4xl lg:text-5xl"></i>
								</li>
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-python fa-2xl text-4xl lg:text-5xl"></i>
								</li>
								<li className="flex justify-center items-center">
									<i className="fa-brands fa-java fa-2xl text-4xl lg:text-5xl"></i>
								</li>

								<li className="flex justify-center items-center">
									<i className="fa-brands fa-react fa-2xl text-4xl lg:text-5xl"></i>
								</li>

							</ul>
						</div>
					
						<div id='comp-liste' className="bg-slate-900 border-slate-800 border-4 mt-2 rounded-md">
							<div id='comp-titre' className="py-1 pl-3">
								<h3 className="text-2xl text-center sm:text-left underline">Manipulation de données</h3>
							</div>
					
							<ul className="flex justify-around p-6 md:p-9 lg:p-12 ">
								<li>Mysql</li>
								<li>JSON</li>
							</ul>
						</div>
					
						{/* <div className='comp-titre'>
							<h3>Systèmes d'exploitation :</h3>
						</div>
						<div className='comp-liste'>
							<ul>
								<li>Linux</li>
								<li>Windows</li>
							</ul>
						</div> */}
					
						<div id='comp-liste' className="bg-slate-900 border-slate-800 border-4 mt-2 rounded-md">
							<div id='comp-titre' className="py-1 pl-3">
								<h3 className="text-2xl text-center sm:text-left underline">Autre</h3>
							</div>

							<ul className="text-center grid grid-cols-2 gap-2 lg:flex lg:justify-between p-6 md:p-9 lg:p-12">
								<li className="leading-6">Programmation Oriente Objet (POO)</li>
								<li className="leading-6">UML</li>
								<li className="leading-6">Word</li>
								<li className="leading-6">Git</li>
							</ul>
						</div>
					</div>
					{/* Peut-être rajouter React / MongoDB / Bureautique */}
				</div>
			</div>
			
		</>
    )
}