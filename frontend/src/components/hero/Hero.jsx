import { Container, Card, Button } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import '../hero/Hero.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Hero = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate() 


  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('email', userInfo.email); // Append email to the formData
    
    try {
      await axios.post('http://localhost:5000/api/users/uploadPdf', formData);
      // If the upload is successful, you can perform additional actions here
      toast.success("PDF UPLOAD DONE")
      navigate('/displayPdf')
    } catch (error) {
      // Handle any errors that occur during the upload
      console.error('Error uploading file: ', error);
    }
  };

  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 uploadingBox' style={{ minHeight: '60vh' }}>
          <h3 className='text-center mb-4' style={{color:"#5e5454"}}>Upload the PDF File</h3>
          <div className='d-flex align-items-center mb-4' style={{margin:"auto"}}>
            {/* <FaUpload size={30} style={{ marginRight: '10px' , color:"#8b15a5"}} />
            <span style={{color:"#8b15a5" , fontFamily:"Poppins" , cursor:"pointer"}} >Click to Upload</span> */}
          
          <FaUpload size={30} style={{ marginRight: '10px', color: '#8b15a5' }} />
            <label htmlFor="upload" style={{ color: '#8b15a5', fontFamily: 'Poppins', cursor: 'pointer' }}>Click to Upload</label>
            <input
              type="file"
              id="upload"
              style={{ display: 'none' }}
              accept=".pdf"
              onChange={handleFileUpload}
            />
          
          </div>
          <p className='text-center' style={{margin:"auto"}}>
            Simple PDF is a good platform for extracting multiple PDF files into a single PDF file. If you want to extract a single PDF from multiple PDF files, please upload them and wait a few minutes.
          </p>
        </Card>
      </Container>
    </div>
  );
};
export default Hero;