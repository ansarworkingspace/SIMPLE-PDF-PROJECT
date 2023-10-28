import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import store from './store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import HomeScreen from './screen/homescreen/HomeScreen';
import LoginScreen from './screen/login/LoginScreen';
import RegisterScreen from './screen/register/RegisterScreen.jsx';
import DisplayPdfPages from './screen/display/DisplayPdfPages.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} /> 
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/displayPdf/:pdfId' element={<DisplayPdfPages />} />



      {/* <Route path='' element={<PrivateRoute />}>
         
      </Route> */}
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
