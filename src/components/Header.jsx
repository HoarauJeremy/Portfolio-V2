import { Link } from "react-router-dom";
import menu from "../assets/burger-menu-svgrepo-com.svg";
import cross from "../assets/times-svgrepo-com.svg";

export default function Header() {

    function toggleNav(){
        const toggleMenuBtn = document.querySelector("#menu-btn");
        const toggleMenuImg = document.querySelector("#menu-btn img");
        const toggledMenu = document.querySelector("#toggled-menu");
        //const menuLinks = document.querySelector("#main-nav ul a");

        //toggleMenuBtn.addEventListener("click", toggleNav);

        toggledMenu.classList.toggle("-translate-y-full")

        if(toggledMenu.classList.contains("-translate-y-full")) {
            toggleMenuImg.setAttribute("src", menu)
            toggleMenuBtn.setAttribute("aria-expanded", "false")
        } 
        else {
            toggleMenuImg.setAttribute("src", cross)
            toggleMenuBtn.setAttribute("aria-expanded", "true")
        }
    } 
    
    return (
        <>
            <header id="Header-div" className='fixed top-0 z-50 w-full bg-white shadow'>
                <nav id="main-nav" className="flex items-center justify-between max-w-5xl p-6 mx-auto bg-white font-rubik">
                <Link to="/" className="flex" aria-label="Page d'accueil du portfolio">
                    <span aria-hidden="true" className="text-lg lg:text-xl">
                        <strong>J</strong><span className="hidden sm:w-7 sm:inline sm:mr-4">érémy</span>
                        <strong>H</strong><span className="hidden sm:w-7 sm:inline sm:mr-4">oarau</span>
                    </span>
                </Link>

                <button onClick={toggleNav} aria-label="toggle button" aria-expanded="false" id="menu-btn" className="cursor-pointer w-7 md:hidden">
                    <img src={menu} alt="" />
                </button>
                <ul id="toggled-menu" className="absolute left-0 flex flex-col items-center w-full text-gray-800 -translate-y-full bg-gray-100 border-b border-gray-200 top-full -z-10 md:bg-transparent md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row">

                    <li className="py-4 md:py-0 md:mr-6">
                        <a href="#formation" id="Header-a" 
                        className="w-full text-sm font-semibold uppercase">Formation</a>
                    </li>
                    <li className="py-4 md:py-0 md:mr-6">
                        <a href="#projet" id="Header-a" 
                        className="w-full text-sm font-semibold uppercase">Projet</a>
                    </li>
                    
                    <li className="py-4 md:py-0 md:mr-6">
                        <Link to="veille" id="Header-a" 
                        className="w-full text-sm font-semibold uppercase">Veille</Link>
                        {/* Peut etre mettre navlink et changer css quand actif */}
                    </li>
                    
                    <li className="py-4 md:py-0 md:mr-6">
                        <Link to="contact" id="Header-a" 
                        className="w-full text-sm font-semibold uppercase">Contact</Link>
                    </li>
                    
                    <li className="py-4 md:py-0 md:mr-6">
                        <Link to='CV' id="Header-a" 
                        className="w-full text-sm font-semibold uppercase">CV</Link>
                    </li>

                    {/* <li>
                        <input type="checkbox" id="theme" />
                    </li> */}
                </ul>
            </nav>
            </header>
        </>
    )
}
