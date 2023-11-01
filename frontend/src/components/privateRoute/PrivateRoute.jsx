import { Navigate, Outlet ,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/UserApiSlice'
import { logout } from '../../slices/AuthSlice';
import { useState,useEffect } from 'react';

const PrivateRoute = () => {




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






  // const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;