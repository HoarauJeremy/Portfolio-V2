export default function PresentationBts() {
    return (
        <>
            <div className="w-11/12 mx-auto my-2">
                
                <div className="w-full text-2xl font-bold text-center font-rubik">
                    <h2>Le <abbr title="Brevet de technicien supérieur">BTS</abbr> Services Informatiques aux Organisations (S.I.O.)</h2>
                </div>
                
                <div id="bts">
                    <p>
                        Le bts <abbr title="fe">S.I.O</abbr> est un diplome réaliser en 2 ans, qui permet aux étudiants d&apos;acquerir dans competances dans à la mise en place de solutions informatiques au sein des organisations, et est constitué de 2 options :  
                    </p>
                    <dl>
                        <dt>Le support et mise à disposition de services informatiques: </dt>
                        <dd></dd>
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
                <div id="sisr">
                    <h3>Solutions d&apos;infrastructure, systèmes et réseaux (S.I.S.R.)</h3>
                    <p>L&apos;option S.I.S.R., a pour but de former des technicien spécialisés dans l&apos;installation, la gestion et la maintenance des infrastructure réseaux et des systèmes Informatiques</p>
                    <p>Les compétences développer par le technicien sont : </p>
                    <ul className="pl-5 list-disc">
                        <li>Administration de réseaux</li>
                        <li>gestion de serveurs</li>
                        <li>sécurité informatique</li>
                        <li>virtualisation</li>
                        <li>cloud computing</li>
                        <li>etc...</li>
                    </ul>
                </div>
                <div id="slam">
                    <h3>Solutions logicielles et applications métiers (S.L.A.M.)</h3>
                    <p>
                        L&apos;option S.L.A.M., a pour but de former des techniciens spécialisés dans le développement d&apos;applications et de logicielles pour des organisations.
                    </p>
                    <p>Les compétences développer par le technicien sont : </p>
                    <ul className="pl-5 list-disc">
                        <li>La programmation</li>
                        <li>La gestion de bases de données</li>
                        <li>L&apos;analyse des besoins des utilisateurs</li>
                        <li>etc...</li>
                    </ul>
                </div>
            </div>
        </>
    )
}