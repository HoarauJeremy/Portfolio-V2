import { listStage } from "../../data/stage";
import CardsStage from "./CardsStage";

export default function Stage() {
    return(
        <div id="Projet-Box" className='w-full pt-3 mx-auto rounded-md md:w-11/12'>
            <div className="md:grid md:grid-cols-2 md:gap-1 lg:grid-cols-3">
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