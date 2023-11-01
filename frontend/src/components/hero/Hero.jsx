import { Container, Card, Button } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import '../hero/Hero.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../slices/UserApiSlice'
import { logout } from '../../slices/AuthSlice';
import { useState,useEffect } from 'react';



const Hero = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate() 
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();




  //check jwt
  useEffect(() => {
    const checkAuth = async () => {
      try {
          const response = await fetch('http://localhost:5000/api/users/checkAuth', {
              credentials: 'include' // Include cookies in the request
          });
          if (!response.ok) {
              await logoutApiCall().unwrap();
              dispatch(logout());
              navigate('/login');
          }
      } catch (error) {
        toast.error('Check auth error');
      }
  };

  if (userInfo) {
      checkAuth();
  }
}, [userInfo, dispatch, logoutApiCall, navigate]); 





  // const handleFileUpload = async (event) => {


  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('pdf', file);
  //   formData.append('email', userInfo.email); // Append email to the formData
    
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/users/uploadPdf',formData)
  //     // If the upload is successful, you can perform additional actions here
  //     toast.success("PDF UPLOAD DONE")
  //     const pdfId = response.data.pdfId; // Extract the PDF ID from the response
  //     navigate(`/displayPdf/${pdfId}`); // Pass the PDF ID as a parameter
  //   } catch (error) {
  //     // Handle any errors that occur during the upload
  //     console.error('Error uploading file: ', error);
  //   }
  // };


  const checkJWT = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/checkAuth', {
        credentials: 'include' // Include cookies in the request
      });
  
      if (!response.ok) {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
        return false;
      }
      return true;
    } catch (error) {
      toast.error('Check auth error');
      return false;
    }
  };


  const handleFileUpload = async (event) => {
  // // Check if the user is authenticated before allowing the file upload
  // try {
  //   const response = await fetch('http://localhost:5000/api/users/checkAuth', {
  //     credentials: 'include' // Include cookies in the request
  //   });

  //   if (!response.ok) {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     navigate('/login');
  //     return;
  //   }
  // } catch (error) {
  //   toast.error('Check auth error');
  //   return;
  // }

  const isAuthenticated = await checkJWT();
  if (!isAuthenticated) {
    return;
  }


    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('email', userInfo.email); // Append email to the formData
    
    try {
      const response = await axios.post('http://localhost:5000/api/users/uploadPdf',formData)
      // If the upload is successful, you can perform additional actions here
      toast.success("PDF UPLOAD DONE")
      const pdfId = response.data.pdfId; // Extract the PDF ID from the response
      navigate(`/displayPdf/${pdfId}`); // Pass the PDF ID as a parameter
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