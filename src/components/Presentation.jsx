import { Typewriter } from "react-simple-typewriter";
import Contact from "./Contact";

export default function Presentation() {
    const comp = ['JavaScript', 'React JS', 'Tailwind CSS', 'MySQL', 'Java', 'Python', 'JavaScript, React JS, Tailwind CSS, MySQL, Java et Python'];
    
    return (
        <div id='Pres' 
        className="flex items-center justify-center w-auto pt-10 mt-20 sm:h-[700px] sm:mt-0 md:pt-16">
            <div id='Pres-Texte' className="flex flex-col w-3/4 p-2 sm:flex-row h-3/4">
                <div className="w-full p-3 mx-auto text-white border rounded-md shadow h-80 sm:h-full bg-zinc-950 border-zinc-800 shadow-zinc-900">
                    Je suis Jérémy Hoarau, un étudiant en BTS SIO (Services Informatique aux Organisations), passionner par le dévelopement Web. Et ayant des connaissance en {' '}
                    <Typewriter
                        words={comp}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
                <Contact />
            </div>
        </div>
    )
}