import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


//login user
const authUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Success' });
});


//register user
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});


//logout user
const logoutUser = (req, res) => {
  res.send('logout user');
};


export {
  authUser,
  registerUser,
  logoutUser
};