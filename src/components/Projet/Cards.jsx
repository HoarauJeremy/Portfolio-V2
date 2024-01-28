export default function Cards(props) {
    const {idProjet, nom, description} = props;
    return (
        <div id="card" key={idProjet} className="bg-slate-50 rounded shadow-md my-1 pl-2">
            {/* <div id="container" className="bg-red-500"> */}
                <h3 className="text-2xl font-rubik">{nom}</h3>
                <p className="font-victor font-medium">{description}</p>
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