import menu from "../../assets/burger-menu-svgrepo-com.svg";
import cross from "../../assets/times-svgrepo-com.svg";
import Presentation from './Presentation';

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
            <header id="Header-div" className='bg-white z-50 fixed top-0 w-full shadow'>
                        <nav id="main-nav" className="bg-white max-w-5xl mx-auto font-rubik p-6 flex items-center justify-between">
                        <a href="root" className="flex" aria-label="Page d'accueil du portfolio">
                            <span aria-hidden="true" className="text-lg lg:text-xl">
                                <strong>J</strong><span className="hidden sm:w-7 sm:inline sm:mr-4">érémy</span>
                                <strong>H</strong><span className="hidden sm:w-7 sm:inline sm:mr-4">oarau</span>
                            </span>
                        </a>

                        <button onClick={toggleNav} aria-label="toggle button" aria-expanded="false" id="menu-btn" className="cursor-pointer w-7 md:hidden">
                            <img src={menu} alt="" />
                        </button>
                        <ul id="toggled-menu" className="w-full absolute top-full left-0 -translate-y-full -z-10
                        text-gray-800 border-b bg-gray-100 md:bg-transparent border-gray-200 flex flex-col items-center
                        md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row">

                            <li className="py-4 md:py-0 md:mr-6">
                                <a href="#formation" id="Header-a" 
                                className="text-sm uppercase font-semibold w-full">Formation</a>
                            </li>
                            <li className="py-4 md:py-0 md:mr-6">
                                <a href="#projet" id="Header-a" 
                                className="text-sm uppercase font-semibold w-full">Projet</a>
                            </li>
                            
                            <li className="py-4 md:py-0 md:mr-6">
                                <a href="#veille" id="Header-a" 
                                className="text-sm uppercase font-semibold w-full">Veille</a>
                            </li>
                            
                            <li className="py-4 md:py-0 md:mr-6">
                                <a href="#contact" id="Header-a" 
                                className="text-sm uppercase font-semibold w-full">Contact</a>
                            </li>

                            <li className="py-4 md:py-0 md:mr-6">
                                <a href="assets/CV - jérémy hoarau.pdf" id="Header-a" 
                                className="text-sm uppercase font-semibold w-full">CV</a>
                            </li>
                        </ul>
                    </nav>
            </header>
            
            <Presentation />
        </>
    )
}

{/* 
    const toggleMenuBtn = document.querySelector("#menu-btn");
    const toggleMenuImg = document.querySelector("#menu-btn img");
    const toggledMenu = document.querySelector("#toggled-menu");
    const menuLinks = document.querySelector("#main-nav ul a");

    toggleMenuBtn.addEventListener("click", toggleNav);

    function toggleNav(){
        toggledMenu.classList.toggle("-translate-y-full")

        if(toggledMenu.classList.contains("-translate-y-full")) {
            toggleMenuImg.setAttribute("src", "../assets/burger-menu-svgrepo-com.svg")
            toggleMenuBtn.setAttribute("aria-expanded", "false")
        } 
        else {
            toggleMenuImg.setAttribute("src", "../assets/times-svgrepo-com.svg")
            toggleMenuBtn.setAttribute("aria-expanded", "true")
        }
    } 
*/}

{/* <header id="Header-div" className='bg-white z-50 fixed top-0 w-full shadow'>
<div className="navig">
    <div className="navig-title">
        <h1>
            <a href='./' className='nav-a'>Jérémy Hoarau</a>
            <button className='hamburger' aria-label='Toggle navigation' aria-expanded='false' />
            <button className='hamburger' aria-label='Toggle navigation' aria-expanded='false'>
                <span></span>
                <span></span>
                <span></span>
            </button>}

        </h1>
    </div>

    <nav>
        <a href="#projet" className="Header-a">Projet</a>
        <a href="#veille" className="Header-a">Veille Technologique</a>
        <a href="#contact" className="Header-a">Contact</a>
        <a href="assets/CV - jérémy hoarau.pdf" className="Header-a">CV</a>
    </nav>
</div>
</header> */}