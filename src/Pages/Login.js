import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    //Sign in with google
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }


    
    //Sign in with email and password
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
      
            })
            .catch(error => {
                console.error(error)
                setError(error.message);  
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div>
            
        <Form onSubmit={handleSubmit} className='ms-lg-5 me-lg-5 ms-3 me-3'>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Label>Open a new account? <Link to='/register'>Register</Link></Form.Label> <br />
            <Button variant="primary" type="submit" className='mb-5'>
                Login
            </Button> <br />

            <Form.Text className="text-danger">
             <h4>{error}</h4>
            </Form.Text>
            

            <ButtonGroup vertical className='mb-5 d-flex justify-content-center ms-5 me-5 '>
                <Button onClick= {handleGoogleSignIn}  className='mb-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                
            </ButtonGroup>
        </Form>
        </div>
    );
};

export default Login;