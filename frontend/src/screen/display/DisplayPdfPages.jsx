import React from 'react'
import PdfShowcase from '../../components/showcase/PdfPagesShowcase'
import { useParams } from 'react-router-dom';


function DisplayPdfPages() {

    const params = useParams();
    const { pdfId } = params;
    

  return (
    <div>
    <PdfShowcase pdfId={pdfId} />
    </div>
  )
}

export default DisplayPdfPages
