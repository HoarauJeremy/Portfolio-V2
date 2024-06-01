import tableauSynthese from './Document/Tableau_de_synthese_Epreuve_E4_BTS_SIO_2024.xlsx';
import ficheE4 from './Document/Epreuve_E4_BTS_SIO_2024.docx';
import ficheE5 from './Document/Epreuve_E5_BTS_SIO_2024.docx';
import attestationStage1 from './Document/Attestation_de_stage_SIO_22-23.pdf';
import attestationStage2 from './Document/Attestation_de_stage_SIO_23-24.pdf';

export default function Documents() {
    return (
        <>
            <div className="flex flex-col w-full h-full pt-10 mt-16 md:pt-16 ">
                <div className="w-11/12 mx-auto mt-20 rounded-md xl:w-1/2 bg-slate-300">
                    <div className="pt-3 mx-auto">
                        <div id="titre" className="text-2xl font-bold text-center font-rubik">
                            <h2>Mes documents</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center w-11/12 px-1 py-4 mx-auto md:w-3/5">
                        <div className='document'>
                            <h4 className='document-titre'>Tableau de synthese</h4>
                            <a href={tableauSynthese} download="Tableau_de_synthese_Epreuve_E4_BTS_SIO_2024_Hoarau_Jeremy.xlsx"
                            className="document-btn">Telecharger</a>
                        </div>
                        <div className='document'>
                            <h4 className="document-titre">Fiche epreuve E4</h4>
                            <a href={ficheE4} download="Epreuve_E4_BTS_SIO_2024_Hoarau_Jeremy.docx"
                            className="document-btn">Telecharger</a>
                        </div>
                        <div className='document'>
                            <h4 className="document-titre">Fiche epreuve E5</h4>
                            <a href={ficheE5} download="Epreuve_E5_BTS_SIO_2024_Hoarau_Jeremy.docx"
                            className="document-btn">Telecharger</a>
                        </div>
                        <div className='document'>
                            <h4 className="document-titre">Attestation de stage 1er année</h4>
                            <a href={attestationStage1} download="Attestation_de_stage_1_annee_Hoarau_Jeremy.pdf"
                            className="document-btn">Telecharger</a>
                        </div>
                        <div className='document'>
                            <h4 className="document-titre">Attestation de stage 2eme année</h4>
                            <a href={attestationStage2} download="Attestation_de_stage_2_annee_Hoarau_Jeremy.pdf"
                            className="document-btn">Telecharger</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}