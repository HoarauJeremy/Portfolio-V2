import { listProjet } from '../../data/projet';
import Cards from './Cards';


export default function Projet() {
    return (
        <div id='projet' className='w-full h-screen'>
            <div id='Projet-titre' className="p-2 text-3xl font-bold text-center font-rubik">
                <h2>Mes Projets</h2>
            </div>
            <div id="Projet-Box" className='w-11/12 p-3 mx-auto rounded-md bg-slate-300'>

                {listProjet.map(({ idProjet, nom, description, url }) => (
                    <Cards key={nom}
                        idProjet={idProjet}  
                        nom={nom}
                        description={description}
                        url={url}
                    />
                ))}
            </div>
        </div>
    )
}