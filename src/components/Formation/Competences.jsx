export default function Competances() {
    return(
        <>
            <div id='comp-liste' className="lg:w-1/3 bg-orange-100 rounded-md">
                <div id='comp-titre' className="font-semibold text-xl mt-3 font-rubik text-center">
                    <h3 className="pt-1">Langages de programation</h3>
                </div>
                <ul className="flex flex-wrap items-center justify-center m-4 p-4">
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-html5 fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-css3 fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-js fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-php fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-python fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-java fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                    <li className="flex-grow basis-32 md:basis-40 text-center">
                        <i className="fa-brands fa-react fa-2xl m-3 pt-3 lg:text-3xl xl:text-5xl"></i>
                    </li>
                </ul>
            </div>

            <div id='comp-liste' className="lg:w-1/3">
                <div id='comp-titre' className="font-semibold text-xl mt-3 font-rubik text-center">
                    <h3>Manipulation de données</h3>
                </div>
                <ul className="flex items-center justify-center m-4">
                    <li className="m-3">Mysql</li>
                    <li className="m-3">JSON</li>
                    <li className="m-3">MongoDB</li>
                </ul>
            </div>
        </>
    )
}