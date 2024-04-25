export default function Contact() {
    return (
        <div id="contact" className="w-11/12 mx-auto text-lg">
            <ul className="w-11/12 mx-auto">
                <li className="flex items-center my-4 md:mt-0">
                    <i className="fa-brands fa-github fa-xl"></i>
                    <a className="mx-1 text-lg text-center font-rubik" href="https://github.com/HoarauJeremy/" target="_blank" rel="noreferrer">
                        <h2>Github</h2>
                    </a>
                </li>
                
                <li className="flex items-center my-4 md:mt-0">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                    <a className="mx-1 text-lg text-center font-rubik" href="https://www.linkedin.com/in/jérémy-hoarau-b31227276/" target="_blank" rel="noreferrer">
                        <h2>LinkedIn</h2>
                    </a>
                </li>
                
                <li className="flex items-center my-4 md:mt-0">
                    <i className="fa-solid fa-envelope fa-xl"></i>
                    <a className="mx-1 text-lg text-center font-rubik" href="mailto:contact@jeremyhoarau.re">
                        <h2>Contactez-moi</h2>
                    </a>
                </li>
            </ul>
        </div>
    )
}
    