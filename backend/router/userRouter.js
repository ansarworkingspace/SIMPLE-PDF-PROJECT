import express from 'express';
import { authUser,registerUser,logoutUser,uploadPdf,getPages,checkAuth } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer';

const router = express.Router();


//MULTER SET UP
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage });


// - Serves the files in the 'uploads' directory to the '/uploads' route.
router.use('/uploads', express.static('uploads'));

// - Creates a new user by registering them with the provided details.
router.post('/register', registerUser);

// - Authenticates the user with the provided credentials.
router.post('/auth', authUser);

// - Logs out the currently logged-in user.
router.post('/logout', logoutUser);

// - Uploads a PDF file using the 'PDF' key from the form data.
router.post('/uploadPdf',upload.single('pdf'), uploadPdf);

// - Retrieves the pages of the PDF corresponding to the provided 'pdfId'.
router.get('/getPages/:pdfId', getPages);

// - Checks whether the user is authenticated or not.
router.get('/checkAuth',checkAuth)


export default router;