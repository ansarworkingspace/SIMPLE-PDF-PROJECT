Simple-PDF MERN Project

Simple-PDF is a website for extracting PDF files as separate files and downloading them in PDF format. Users can easily upload a multiple-paged PDF file, select the pages they want to extract, and download them.

Installation:

1. Clone the project.
2. After cloning, open VS Code.
3. Set up the environment. Rename the file `envexample` to `.env` and fill in the following variables:

    ```
    NODE_ENV=development
    PORT=
    MONGO_URI=
    JWT_SECRET=
    ```
4. Change the name of the folder `uploads-example` in the root folder to `uploads`.
5. In the root folder, run `npm install`.
6. Navigate to the frontend directory with `cd frontend` and run `npm install`.
7. To start, run `npm run dev` in the root folder.
8. Installation is complete.


Usage:

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/ecfce976-2c50-4a07-aa94-547c7640add7">
</p>

1. Users must register to extract PDFs.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/a65978c8-82a8-4351-a34d-d73182a1ea72">
</p>

2. After registering, log in to the user account.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/6daa1ae3-d7c6-41d2-b954-9253b1af1317">
</p>

3. Then, redirect to the homepage.

4. Users can easily upload a PDF file by clicking the upload icon.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/0bce3c1b-c198-43bc-bafc-bb67d3d8dc23">
</p>

5. The pages will be displayed.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/c2984e91-f67a-407f-a669-db3af9eadcce">
</p>

6. Now, users can select any desired pages by clicking the checkboxes.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/b58c42e0-3ef4-4062-a2ae-816f61ddcc2c">
</p>

7. After selecting the checkboxes, the user can see the download button and easily download the selected PDF file as a single PDF file.

<p align="center">
  <img src="https://github.com/ansarworkingspace/SIMPLE-PDF-PROJECT/assets/136152544/312228a5-6876-435b-931c-7ac9b5aa8273">
</p>



Technologies Used:

Backend:
- MongoDB
- React JS
- Node JS
- Express
- Axios (1.6.0)
- Bcryptjs (2.4.3)
- Cookie-parser (1.4.6)
- Cors (2.8.5)
- Dotenv (16.3.1)
- Express-async-handler (1.2.0)
- Jsonwebtoken (9.0.2)
- Mongoose (7.6.3)
- Multer (1.4.5-lts.1)
- Pdf-lib (1.17.1)
- UUID (9.0.1)

Frontend:
- Reduxjs/toolkit (1.9.7)
- Bootstrap (5.3.2)
- File-saver (2.0.5)
- Pdf-lib (1.17.1)
- Pdfjs-dist (3.11.174)
- React (18.2.0)
- React-bootstrap (2.9.1)
- React-dom (18.2.0)
- React-icons (4.11.0)
- React-redux (8.1.3)
- React-router-bootstrap (0.26.2)
- React-router-dom (6.17.0)
- React-toastify (9.1.3)

Features:
Users can upload multiple-page PDF files, extract their desired pages, and implement JWT for user authorization.


Author:
Muhammed Ansar EN - Web Developer (MERN Stack)


## Simple PDF API Documentation

1. Serve Uploaded PDFs
- Endpoint: /uploads
- Method: GET
- Description: Serves static files from the 'uploads' directory.
- Request: N/A
- Response: N/A

2. User Registration
- Endpoint: /register
- Method: POST
- Description: Registers a new user.
- Request: User registration data in the request body.
- Response: JSON containing user registration details.

3. User Authentication
- Endpoint: /auth
- Method: POST
- Description: Authenticates a user.
- Request: User login credentials in the request body.
- Response: JSON containing user authentication details.

4. User Logout
- Endpoint: /logout
- Method: POST
- Description: Logs out a user.
- Request: User authentication data in the request body.
- Response: JSON indicating successful logout.

5. Upload PDF
- Endpoint: /uploadPdf
- Method: POST
- Description: Uploads a PDF file.
- Request: PDF file to be uploaded (multipart form data).
- Response: JSON with upload status and file details.

6. Get Pages of a PDF
- Endpoint: /getPages/:pdfId
- Method: GET
- Description: Retrieves the pages of a specific PDF.
- Request: PDF ID in the URL parameter.
- Response: JSON containing the pages of the specified PDF.

7. Check User Authentication
- Endpoint: /checkAuth
- Method: GET
- Description: Checks if the user is authenticated.
- Request: N/A
- Response: JSON indicating the user's authentication status.
