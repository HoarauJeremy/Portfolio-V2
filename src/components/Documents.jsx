import tableauSynthese from './Document/Tableau_de_synthese_Epreuve_E4_BTS_SIO_2024.xlsx';
import ficheE4 from './Document/Epreuve_E4_BTS_SIO_2024.docx';
import ficheE5 from './Document/Epreuve_E5_BTS_SIO_2024.docx';
import attestationStage1 from './Document/Attestation_de_stage_SIO_22-23.pdf';
import attestationStage2 from './Document/Attestation_de_stage_SIO_23-24.pdf';

export default function Documents() {
    return (
        <>
            <div className="flex flex-col w-full h-full pt-10 md:pt-16 ">
                <div className="mx-auto mt-20">
                    <div id="titre" className="text-2xl font-bold text-center font-victor">
                        <h2>Mes documents</h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center w-11/12 px-1 py-4 mx-auto md:w-3/5">
                    <div className='document'>
                            <h4 className='w-full text-sm font-semibold uppercase'>Tableau de synthese</h4>
                            {/* <img src={tableauSynthese} alt="Tableau de synthese" /> */}
                        <a href={tableauSynthese} download="Tableau_de_synthese_Epreuve_E4_BTS_SIO_2024_Hoarau_Jeremy.xlsx" 
                        // className="transition duration-300 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Telecharger</a>
                        className="w-full px-1 py-2 text-sm font-medium uppercase transition duration-300 ease-in-out delay-150 rounded shadow bg-slate-300 hover:-translate-y-1 hover:bg-slate-500 hover:scale-110">Telecharger</a>
                    </div>
                    <div className='document'>
                        <h4 className="w-full text-sm font-semibold uppercase">Fiche epreuve E4</h4>
                        <a href={ficheE4} download="Epreuve_E4_BTS_SIO_2024_Hoarau_Jeremy.docx"
                        className="w-full px-1 py-2 text-sm font-medium uppercase transition duration-300 ease-in-out delay-150 rounded shadow bg-slate-300 hover:-translate-y-1 hover:bg-slate-500 hover:scale-110">Telecharger</a>
                    </div>
                    <div className='document'>
                        <h4 className="w-full text-sm font-semibold uppercase">Fiche epreuve E5</h4>
                        <a href={ficheE5} download="Epreuve_E5_BTS_SIO_2024_Hoarau_Jeremy.docx"
                        className="w-full px-1 py-2 text-sm font-medium uppercase transition duration-300 ease-in-out delay-150 rounded shadow bg-slate-300 hover:-translate-y-1 hover:bg-slate-500 hover:scale-110">Telecharger</a>
                    </div>
                    <div className='document'>
                        <h4 className="w-full text-sm font-semibold uppercase">Attestation de stage 1er année</h4>
                        <a href={attestationStage1} download="Attestation_de_stage_1_annee_Hoarau_Jeremy.pdf"
                        className="w-full px-1 py-2 text-sm font-medium uppercase transition duration-300 ease-in-out delay-150 rounded shadow bg-slate-300 hover:-translate-y-1 hover:bg-slate-500 hover:scale-110">Telecharger</a>
                    </div>
                    <div className='document'>
                        <h4 className="w-full text-sm font-semibold uppercase">Attestation de stage 2eme année</h4>
                        <a href={attestationStage2} download="Attestation_de_stage_2_annee_Hoarau_Jeremy.pdf"
                        className="w-full px-1 py-2 text-sm font-medium uppercase transition duration-300 ease-in-out delay-150 rounded shadow bg-slate-300 hover:-translate-y-1 hover:bg-slate-500 hover:scale-110">Telecharger</a>
                    </div>
                </div>
            </div>
        </>
    )
}