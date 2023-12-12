import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    
    
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.SorC.value;
         console.log(name, photoURL, email, password, role);

        createUser(email, password, role, photoURL)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(email, name,role, photoURL);
                toast.error('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, email, role, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {
                saveUser(name, email,role );
             })
            .catch(error => console.error(error));
    }

    
    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('https://b-assignment12-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    return (
        <Form onSubmit={handleSubmit} className='ms-lg-5 me-lg-5 ms-3 me-3'>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>seller or customer</Form.Label>
                <Form.Control name="SorC" type="text" placeholder="Ex- seller or customer" required />
            </Form.Group>

            <Form.Label>Already have an account? <Link to='/login'>Login</Link></Form.Label> <br />
            <Button className="footer-footer" variant="primary" type="submit" >
                Register
            </Button>
            <Form.Text className="text-danger">
                <h4>{error}</h4>
            </Form.Text>
        </Form>
    );
};

export default Register;