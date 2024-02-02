export default function Presentation() {
    return (
        <div id='Pres' 
        className="flex items-center justify-center w-auto h-screen pt-10 bg-red-700 md:pt-16">
            <div id='Pres-Texte' className="lg:grid lg:grid-cols-2 h-5/6">
                <div id="titre" className="w-11/12 max-w-3xl p-2 mx-auto text-white rounded-md bg-slate-950 h-2/5 md:h-80">
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