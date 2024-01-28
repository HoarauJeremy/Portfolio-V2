import { listProjet } from '../../data/projet';
import Cards from './Cards';


export default function Projet() {
    return (
        <div id='projet' className='w-full h-screen bg-yellow-500'>
            <div id='Projet-titre' className="font-bold text-3xl font-rubik text-center p-2">
                <h2>Mes Projets</h2>
            </div>
            <div id="Projet-Box" className='bg-slate-500 rounded-md w-11/12 mx-auto p-3'>

                {listProjet.map(({ idProjet, nom, description }) => (
                    <Cards key={nom}
                        idProjet={idProjet}  
                        nom={nom}
                        description={description}
                    />
                ))}
            </div>
        </div>
    )
}

{/* <div id='projet' className="text-white bg-black h-screen w-full">
<div id='Projet-titre' className='h-16 w-full flex justify-center items-center'>
    <h2 className='text-2xl sm:text-4xl font-rubik'>Mes Projets</h2>
</div>
<div id="Projet-Box" className='bg-gray-500'>

    {listProjet.map(({ idProjet, nom, description }) => (
        <Cards key={nom}
            idProjet={idProjet}  
            nom={nom}
            description={description}
        />
    ))}

</div>

{/* <div className='a'></div> }

</div> */}