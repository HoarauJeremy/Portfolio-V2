export default function Competances() {
    return(
        <>
            <div id='comp-liste' className="w-11/12 mx-auto rounded-md shadow bg-slate-100 shadow-slate-300">
                <div id='comp-titre' className="mt-3 text-xl font-semibold text-center font-rubik">
                    <h3 className="pt-1">Langages de programation</h3>
                </div>
                <ul className="flex flex-wrap items-center justify-center p-4 m-4">
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-html5 fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-css3 fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-js fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-php fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-python fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-java fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow text-center basis-32 md:basis-24">
                        <i className="pt-3 m-3 fa-brands fa-react fa-2xl lg:text-3xl xl:text-5xl"></i>
                    </li>
                </ul>
                <div id='comp-liste'>
                    <div id='comp-titre' className="mt-3 text-xl font-semibold text-center font-rubik">
                        <h3>Manipulation de données</h3>
                    </div>
                    <ul className="flex items-center justify-center m-4">
                        <li className="m-3">Mysql</li>
                        <li className="m-3">JSON</li>
                        <li className="m-3">MongoDB</li>
                    </ul>
                </div>
            </div>

        </>
    )
}