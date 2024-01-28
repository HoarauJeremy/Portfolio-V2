import { listStage } from "../../data/stage";
import CardsStage from "./CardsStage";

export default function Stage() {
    return(
        <div id="Projet-Box" className='rounded-md w-full md:w-3/4 mx-auto pt-3'>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                {listStage.map(({ id, poste, lieu, date, taches }) => (
                    <CardsStage key={id}
                        id={id}
                        poste={poste}
                        lieu={lieu}
                        date={date}
                        taches={taches}
                    />
                ))}
            </div>
        </div>
    )
}