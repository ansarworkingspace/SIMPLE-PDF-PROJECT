import React,{useEffect,useState} from 'react'
import PdfShowcase from '../../components/showcase/PdfPagesShowcase'
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/UserApiSlice'
import { logout } from '../../slices/AuthSlice';


function DisplayPdfPages() {

    const params = useParams();
    const { pdfId } = params;
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [logoutApiCall] = useLogoutMutation();
    const navigate =useNavigate()

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





  return (
    <div>
    <PdfShowcase pdfId={pdfId} />
    </div>
  )
}

export default DisplayPdfPages
