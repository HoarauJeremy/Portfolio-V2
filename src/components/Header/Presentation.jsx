export default function Presentation() {
    return (
        <div id='Pres' 
        className="pt-10 md:pt-16 w-auto h-screen flex justify-center items-center bg-red-700">
            <div id='Pres-Texte' className="lg:grid lg:grid-cols-2 h-5/6">
                <div id="titre" className="text-white bg-slate-950 rounded-md h-2/5 md:h-80 max-w-3xl w-11/12 mx-auto p-2">
                    <h2>
                        Hello World!!!!
                    </h2>
                </div>
                <div id="Text" className="w-11/12 mx-auto text-lg">
                    <p>Je suis <span className="font-bold">Jérémy Hoarau</span>, un étudiant en BTS SIO (Services Informatique aux Organisations), passionner par le dévellopement Web.
                    Et ayant des connaissance en Java et Python.</p>
                </div>
            </div>
            {/* <div id='Pres-Img'>
                <div id='Pres-resource'></div>
            </div> */}
        </div>
    )
}