export default function CardsStage(props) {
    const {id, poste, lieu, date, taches} = props;
    return (
        <div id="card" key={id} className="p-2 m-2 rounded shadow bg-slate-100 shadow-slate-300">
            {/* <div id="container" className="bg-red-500"> */}
                <h3 className="text-2xl font-rubik">{poste}</h3>
                <p className="font-medium font-victor">{lieu}</p>
                <p className="pt-1 font-medium font-victor">Date : {date}</p>
                <p className="pt-1 font-medium font-victor"><b>Taches :</b> {taches}</p>
            {/* </div> */}
        </div>
    )
}

{/* <div id="card" key={idProjet}>
<div id="container" className="w-11/12 pl-2 mx-auto my-2 bg-sky-950">
    <h3 className="">{nom}</h3>
    <p>{description}</p>
</div>
</div> */}