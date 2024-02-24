import { useState } from "react";
import { Document, Page } from "react-pdf"
import { pdfjs } from 'react-pdf';
import pdfURL from './test.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Viewer() {
    /* const [pageNumber, setPageNumber] = useState(1);

    const numPages = 3; // Replace with the actual number of pages

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber((prevPageNumber) => prevPageNumber - 1);
        }
    }; */

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="w-full my-24 md:mx-auto md:w-2/4">
            
            <div className="flex flex-col justify-center w-full px-2 pt-12 mt-12 bg-gray-300">
                <p>
                    {/* Rajouter un bouton pour telecharger le pdf */}
                    Page {pageNumber} of {numPages}
                </p>
                <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x,i) => i+1)
                        .map((page) => {
                            return <Page key={page} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} className='mt-2' />
                        })}
                </Document>
            </div>
        </div>
    )
}