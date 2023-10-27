import { Container, Card, Button } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';
import '../hero/Hero.css'

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 uploadingBox' style={{ minHeight: '60vh' }}>
          <h3 className='text-center mb-4' style={{color:"#5e5454"}}>Upload the PDF File</h3>
          <div className='d-flex align-items-center mb-4' style={{margin:"auto"}}>
            <FaUpload size={30} style={{ marginRight: '10px' , color:"#8b15a5"}} />
            <span style={{color:"#8b15a5" , fontFamily:"Poppins" , cursor:"pointer"}} >Click to Upload</span>
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