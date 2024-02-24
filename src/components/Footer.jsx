import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full mt-auto bg-white border-t sm:h-28">
                <div id="titre-footer" className="flex flex-col w-full mx-auto my-4 sm:mt-0">
                    <Link to='/'>
                        <h2 className="my-1 font-semibold text-center font-rubik">&copy; Jérémy Hoarau. Tout droits réservés</h2>
                    </Link>
                    <Link to="MentionLegale" className="my-1 text-center font-rubik">
                        <h2>Mention Légale</h2>
                    </Link>
                </div>
        </footer>
    )
}