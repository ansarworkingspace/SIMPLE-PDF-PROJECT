// import React from 'react';
// import '../landingPage/LandingPage.css'; // Import the CSS file for styling
// import { FaUpload } from 'react-icons/fa';



// function LandingPage() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 mt-4 left-div"> {/* Added mt-4 for margin-top */}
//           <div className="gif">
//             <embed
//               src="https://media.giphy.com/media/eIAopzF9lGaYPClAHa/giphy.gif"
//               type="image/gif"
//               style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-12 mt-4 right-div"> {/* Added mt-4 for margin-top */}
        



// <div className='uploadLanding'>
//   <h3 className='text-center mb-4' style={{color:"#5e5454"}}>Upload the PDF File</h3>
//   <div className='d-flex align-items-center mb-4' style={{margin:"auto"}}>
    
//   <FaUpload size={30} style={{ marginRight: '10px', color: '#8b15a5' }} />
//     <label htmlFor="upload" style={{ color: '#8b15a5', fontFamily: 'Poppins', cursor: 'pointer' }}>Click to Upload</label>
  
//   </div>
//   <p className='text-center' style={{margin:"auto"}}>
//     Simple PDF is a good platform for extracting multiple PDF files into a single PDF file. If you want to extract a single PDF from multiple PDF files, please upload them and wait a few minutes.
//   </p>
// </div>



//           <div className='landingHeading'>
//             <h2>TAILORED PDF SOLUTIONS: Seamlessly Extract and Customize Your Content!</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;



import React from 'react';
import '../landingPage/LandingPage.css'; // Import the CSS file for styling
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function LandingPage() {

const navigate=useNavigate()

const handleUploadClick = () => {
 navigate('/login');
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 mt-4 left-div">
          <div className="gif">
            <embed
              src="https://media.giphy.com/media/eIAopzF9lGaYPClAHa/giphy.gif"
              type="image/gif"
              style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-4 right-div d-flex flex-column justify-content-start" >
      
       

<div className='uploadLanding mb-4 mt-4 text-center' style={{ height: "55vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  <h3 style={{ color:"#5e5454" }} >Upload the PDF File</h3>
  <div className='d-flex align-items-center justify-content-center mb-4'>
    <FaUpload size={30} style={{ marginRight: '10px', color: '#8b15a5' }} />
    <label htmlFor="upload" style={{ color: '#8b15a5', fontFamily: 'Poppins', cursor: 'pointer' }} onClick={handleUploadClick}>Click to Upload</label>
  </div>
  <p style={{ color: "#5e5454" }}>
    Simple PDF is a good platform for extracting multiple PDF files into a single PDF file. If you want to extract a single PDF from multiple PDF files, please upload them and wait a few minutes.
  </p>
</div>


          <div className='landingHeading'>
            <h2>TAILORED PDF SOLUTIONS: Seamlessly Extract and Customize Your Content!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
