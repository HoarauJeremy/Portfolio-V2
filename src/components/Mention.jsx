export default function Mention() {
    return (
        <>
            <div className="flex flex-col w-full h-full pt-10 md:pt-16">
                <div className="mt-20">
                    <h1 className="text-2xl font-bold text-center font-rubik">Mentions Légales</h1>
                    <div className="w-10/12 mx-auto my-2 md:w-3/4">
                        <p>
                            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique,
                            il est précisé aux utilisateurs du site jeremyhoarau l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                        </p>
                        
                        <h2 className="pt-2 text-xl font-bold underline">Edition du site :</h2> 
                        <p>
                            Le présent site, accessible à l’URL <a className="font-semibold" href="https://jeremyhoarau.re/">https://jeremyhoarau.re/</a> (le « Site »), est édité par :
                            Jérémy Hoarau, résidant 39 chemin Auguste Boyer, 97480 Saint-joseph, La Réunion, de nationalité Française (France), né(e) le 17/09/2002,
                        </p> 

                        <h2 className="pt-2 text-xl font-bold underline">Hébergement :</h2>
                        <p>Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).</p>

                        <h2 className="pt-2 text-xl font-bold underline">Liens vers d'autres sites internet :</h2>
                        <p>
                            Ce site internet peut contenir des liens vers d'autres sites internet.
                            Hoarau Jérémy n'a aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et à leur utilisation.
                        </p>
                        
                        <h2 className="pt-2 text-xl font-bold underline">Directeur de publication :</h2> 
                        <p>Le Directeur de la publication du Site est Jérémy Hoarau.</p>
                        
                        <h2 className="pt-2 text-xl font-bold underline">Nous contacter :</h2>
                        <p>Par téléphone : <a href="tel:+262692547773">+262692547773</a></p>
                        <p>Par email : <a href="mailto:jeremyhoarau44@gmail.com">jeremyhoarau44@gmail.com</a></p>
                        <p>Par courrier : 39 chemin Auguste Boyer, 97480 Saint-joseph, La Réunion</p>
                        {/* Génération des mentions légales par Legalstart. */}
                    </div>                    
                </div>
            </div>
        </>
    )
}