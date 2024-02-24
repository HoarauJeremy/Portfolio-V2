export default function Cards(props) {
    const {idProjet, nom, description, url} = props;
    const classname = url ? 'hover:bg-slate-300' : "";
    
    return (
        <div id="card" key={idProjet} className={"pl-2 my-1 rounded shadow-md bg-slate-50 " + classname}>
            {/* <div id="container" className="bg-red-500"> */}
                {url ? (
                    <a href={url}>
                        <h3 className="text-2xl font-rubik">{nom}</h3>
                        <p className="font-medium font-victor">{description}</p>
                    </a>
                )
                : (
                    <>
                        <h3 className="text-2xl font-rubik">{nom}</h3>
                        <p className="font-medium font-victor">{description}</p>
                    </>
                )
                }
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