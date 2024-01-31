export default function CardsStage(props) {
    const {id, poste, lieu, date, taches} = props;
    return (
        <div id="card" key={id} className="bg-slate-100 rounded shadow-md shadow-slate-300 m-2 p-2">
            {/* <div id="container" className="bg-red-500"> */}
                <h3 className="text-2xl font-rubik">{poste}</h3>
                <p className="font-victor font-medium">{lieu}</p>
                <p className="font-victor font-medium pt-1">Date: {date}</p>
                <p className="font-victor font-medium pt-1"><b>Taches:</b> {taches}</p>
            {/* </div> */}
        </div>
    )
}

{/* <div id="card" key={idProjet}>
<div id="container" className="w-11/12 bg-sky-950 mx-auto my-2 pl-2">
    <h3 className="">{nom}</h3>
    <p>{description}</p>
</div>
</div> */}