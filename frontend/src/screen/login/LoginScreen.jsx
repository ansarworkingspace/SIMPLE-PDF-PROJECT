
//LOGIN SCREEN
import { useState , useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/UserApiSlice';
import { setCredentials } from '../../slices/AuthSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth);
  


    //NAVIGATING TO HOME 
    useEffect(() => {
      if (userInfo) {
        navigate('/');
      }
     }, [navigate, userInfo]);


    //LOGIN FORM SUBMITION
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    };
  

    return (
      <FormContainer>
        <h2>Sign In</h2>
  
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button
            disabled={isLoading}
            type='submit'
            variant='primary'
            className='mt-3 btNcolor'
          >
            Sign In
          </Button>
        </Form>
  
        {isLoading && <Loader />}
  
        <Row className='py-3'>
          <Col className='fontPopSmall'>
            New Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </FormContainer>
    );
  };
  
  export default LoginScreen;