import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full mt-auto border-t sm:flex-row justify-evenly sm:items-center h-60 sm:h-28">
            <Contact />
            <div id="footer-box" className="flex flex-col sm:flex-row sm:w-1/2">
                <div id="titre-footer" className="w-11/12 mx-auto mt-4 sm:mt-0">
                    <h2 className="text-base font-bold text-center font-rubik">Jérémy Hoarau</h2>
                </div>
                <div id="info-footer" className="w-11/12 mx-auto mt-4 sm:mt-0 sm:w-full">
                    <Link to="mention" className="text-base text-center font-rubik">
                        <h2>Mention Légale</h2>
                    </Link>
                </div>
            </div>
        </footer>
    )
}