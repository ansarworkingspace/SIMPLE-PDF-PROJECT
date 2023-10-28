import asyncHandler from 'express-async-handler';
import User from '../models/userModels.js';
import generateToken from '../utils/generateToken.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';


//login user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


//register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});



//logout user
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};


const uploadPdf = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body; // Retrieve user details
   

    const pdfFile = req.file; // PDF file uploaded by the user

    const existingPdfBytes = fs.readFileSync(pdfFile.path);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const user = await User.findOne({ email });

    if (user) {
      const pdfData = {
        id: uuidv4(), // Generate a unique ID for the PDF
        pages: [],
      };

      // Extract and save each page
      for (let i = 0; i < pdfDoc.getPageCount(); i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        const pageId = `${pdfData.id}_${i + 1}.pdf`; // Generate a unique ID for the page

        // Save the pdfBytes to the upload folder with the unique pageId
        fs.writeFileSync(`uploads/${pageId}`, pdfBytes);

        // Store the page ID in the pdfData
        pdfData.pages.push({ id: pageId });
      }

      // Add the pdfData to the user's pdfStore
      user.pdfStore.push(pdfData);

      // Save the user data
      await user.save();

      
      res.status(200).json({ message: 'PDF uploaded successfully' });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export {
  authUser,
  registerUser,
  logoutUser,
  uploadPdf
};