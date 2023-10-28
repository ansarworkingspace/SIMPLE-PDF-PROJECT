

import React,{useState,useEffect} from 'react';
import './PdfShowcase.css';
import { useSelector } from 'react-redux';
import axios from 'axios';


const PdfShowcase = ({ pdfId }) => {


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

    // console.log('PDF ID in pdfshowcase:', pdfId);
    // console.log('Page IDs:', pageIds);


//   return (
//     <div className="pdf-showcase">
//       <div className="pdf-page-box">
//         <div className="inner-box">
//           <div className="additional-div">Content Here</div>
//         </div>
//         <div className="page-number">1</div>
//         <input type="checkbox" name="pdf-page" value="1" />
//       </div>
//       <div className="pdf-page-box">
//         <div className="inner-box">
//           <div className="additional-div">Content Here</div>
//         </div>
//         <div className="page-number" >2</div>
//         <input type="checkbox" name="pdf-page" value="2" />
//       </div>
//     </div>
//   );



return (
    <div className="pdf-showcase">
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
                <input type="checkbox" name="pdf-page" value={index + 1} />
            </div>
        ))}
    </div>
);



};

export default PdfShowcase;
