import express from 'express';
import { authUser,registerUser,logoutUser,uploadPdf,getPages } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer';

const router = express.Router();



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



router.use('/uploads', express.static('uploads'));
router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.post('/uploadPdf', upload.single('pdf'), uploadPdf);
router.get('/getPages/:pdfId', getPages);



export default router;