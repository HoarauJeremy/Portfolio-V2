export default function PresentationBts() {
    return (
        <>
            <div className="w-11/12 mx-auto my-2">
                
                <div className="w-full text-2xl font-bold text-center font-rubik">
                    <h2>Le <abbr title="Brevet de technicien supérieur">BTS</abbr> Services Informatiques aux Organisations (S.I.O.)</h2>
                </div>
                
                <div id="bts" className="mt-2">
                    <p>
                        Le BTS <abbr title="fe">S.I.O</abbr> est un diplôme de deux ans qui permet aux étudiants d&apos;acquérir des compétences pour la mise en place de solutions informatiques au sein des organisations. :  
                    </p>
                    <dl className="my-1">
                        <dt>Le support et mise à disposition de services informatiques: </dt>
                        <dd className="m-2">Les étudiants sont formés pour répondre aux attentes des utilisateurs en assurant la disponibilité des services informatiques existants. Ils sont également capables de prendre en compte les besoins informatiques de l&apos;entreprise et de soutenir la transformation numérique des services informatiques.</dd>
                        <dt>Cybersécurité des services informatiques: </dt>
                        <dd className="m-2">Les étudiants sont formés à la cybersécurité et à son intégration dans l&apos;entreprise, en tenant compte des dimensions techniques, organisationnelles et juridiques.</dd>
                    </dl>
                </div>
                <div className="flex flex-col mt-2 justify-evenly md:flex-row">
                    <div id="sisr" className="p-2 rounded-md shadow-sm shadow-slate-300 bg-slate-100 md:mx-2 md:w-4/12 h-5/6">
                        <h3 className="text-xl font-medium">Solutions d&apos;infrastructure, systèmes et réseaux (S.I.S.R.) :</h3>
                        <div className="mt-1 ml-2">
                            <p>L&apos;option S.I.S.R., a pour but de former des technicien spécialisés dans l&apos;installation, la gestion et la maintenance des infrastructure réseaux et des systèmes Informatiques</p>
                            <p className="mt-1">Les compétences développer par le technicien sont : </p>
                            <ul className="list-disc pl-7">
                                <li>Administration de réseaux</li>
                                <li>gestion de serveurs</li>
                                <li>sécurité informatique</li>
                                <li>virtualisation</li>
                                <li>cloud computing</li>
                                <li>etc...</li>
                            </ul>
                        </div>
                    </div>
                    <div id="slam" className="p-2 my-2 rounded-md shadow-sm shadow-slate-300 bg-slate-100 md:mx-2 md:w-4/12 h-2/3 md:mt-0">
                        <h3 className="text-xl font-medium">Solutions logicielles et applications métiers (S.L.A.M.) :</h3>
                        <div className="mt-1 ml-2">
                            <p>L&apos;option S.L.A.M., a pour but de former des techniciens spécialisés dans le développement d&apos;applications et de logicielles pour des organisations.</p>
                            <p className="mt-1">Les compétences développer par le technicien sont : </p>
                            <ul className="list-disc pl-7">
                                <li>La programmation</li>
                                <li>La gestion de bases de données</li>
                                <li>L&apos;analyse des besoins des utilisateurs</li>
                                <li>etc...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}