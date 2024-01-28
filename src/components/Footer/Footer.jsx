import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row justify-evenly sm:items-center w-full h-60 sm:h-28">
            <Contact />
            <div id="footer-box" className="flex flex-col sm:flex-row sm:w-1/2">
                <div id="titre-footer" className="mt-4 w-11/12 mx-auto sm:mt-0">
                    <h2 className="font-rubik font-bold text-lg text-center">Jérémy Hoarau</h2>
                </div>
                <div id="info-footer" className="mt-4 w-11/12 mx-auto sm:mt-0 sm:w-full">
                    <a href="" className="font-rubik text-lg text-center">
                        <h2>Mention Légale</h2>
                    </a>
                </div>
            </div>
        </footer>
    )
}