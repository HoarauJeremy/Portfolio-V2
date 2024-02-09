import { Link } from "react-router-dom";
// import Contact from "./Contact";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full mt-auto border-t h-60 sm:h-28">
            {/* <div id="footer-box" className="flex flex-col sm:flex-row sm:w-1/2"> */}
                <div id="titre-footer" className="flex flex-col w-full mx-auto mt-4 sm:justify-between sm:flex-row sm:mt-0">
                    <Link to='/'>
                        <h2 className="font-bold text-center font-rubik">Jérémy Hoarau</h2>
                    </Link>
                    <Link className="text-center font-rubik" to="contact">
                        <h2>Contactez Moi !</h2>
                    </Link>
                    <Link to="mention" className="text-center font-rubik">
                        <h2>Mention Légale</h2>
                    </Link>
                </div>
            {/* </div> */}
        </footer>
    )
}