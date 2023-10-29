

import React,{useState,useEffect} from 'react';
import './PdfShowcase.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';



const PdfShowcase = ({ pdfId }) => {

    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [pageIds, setPageIds] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/getPages/${pdfId}?email=${userInfo.email}`);
                const pages = response.data.pages;
                const ids = pages.map((page) => page.id); // Extracting only the IDs
                setPageIds(ids);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };
        fetchPages();
    }, [pdfId, userInfo.email]);




    const handleDownload = async () => {
        const mergedPdf = await PDFDocument.create();
        const loadedPdfPages = [];
    
        for (const index of checkedBoxes) {
          const pageId = pageIds[index];
          const response = await axios.get(`http://localhost:5000/api/users/uploads/${pageId}`, { responseType: 'arraybuffer' });
          const pdfBytes = response.data;
          const loadedPdf = await PDFDocument.load(pdfBytes);
          loadedPdfPages.push(loadedPdf);
        }
    
        for (const pdf of loadedPdfPages) {
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          copiedPages.forEach((page) => {
            mergedPdf.addPage(page);
          });
        }
    
        const mergedPdfBytes = await mergedPdf.save();
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'merged.pdf');
      };


      const handleCheckboxChange = (index) => {
        if (checkedBoxes.includes(index)) {
          setCheckedBoxes(checkedBoxes.filter((item) => item !== index));
        } else {
          setCheckedBoxes([...checkedBoxes, index]);
        }
      };
return (
    <div className="pdf-showcase">
      {checkedBoxes.length > 0 && (
        <button style={{fontFamily:"Poppins"}} onClick={handleDownload} className="download-button">
          Download
        </button>
      )}
        {pageIds.map((pageId, index) => (
            <div key={index} className="pdf-page-box">
                <div className="inner-box">
                <embed
                        src={`http://localhost:5000/api/users/uploads/${pageId}`}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="page-number">{index + 1}</div>
                <input type="checkbox" name="pdf-page" value={index + 1}  onChange={() => handleCheckboxChange(index)} />
            </div>
        ))}
    </div>
);



};

export default PdfShowcase;
