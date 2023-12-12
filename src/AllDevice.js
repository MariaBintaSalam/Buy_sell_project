import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import Example from './Modal';

const AllDevice = ({x}) => {
    const { userName, email, deviceModel, PhotoURL, location, rPrice, oPrice, uses, date, _id } = x;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const { user } = useContext(AuthContext);
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/emaila?name=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])
    
      console.log(review)



      //Adding Review
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;
        const rev = {
            deviceId: _id,
            email,
            deviceModel,
            phone,
            meeting,
            PhotoURL,
            rPrice
        }

        fetch('https://b-assignment12-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Product Booked Successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));

    }




    return (
        <div  className='border border-3 border-success m-4 p-4'>
            <img  src={PhotoURL} alt="" /><br />
            <p>Seller Name: {userName}</p>
            <p>Device Model: {deviceModel}</p>
            <p>Location: {location}</p>
            <p>Resale Price: {rPrice} \-</p>
            <p>Original Price: {oPrice} \-</p>
            <p>Years of Use: {uses}</p>
            <p>Post Date: {date}</p>  

            <>
      <Button variant="primary" onClick={handleShow}>
        Book Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Device Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
                        <div className='p-3'>
                        {/* {
                            review.map(x => <div
                                key={x._id}
                                x={x}
                                
                            >
                                <p>{x.deviceModel}</p>
                                <p>{x.oPrice}</p>
                            </div>)
                        } */}
                        <img className='review-img' src={PhotoURL} alt="" />
                        <p>Model: {deviceModel}</p>
                        <p>Price: {rPrice}</p>
                        </div>
                            <div>
                            {
                                review.map((a) =><div className='d-flex' key={a._id}>
                                
                                
                                <>
                                
                                <h3 className='ms-5'>Name: {a?.email}</h3>
                                </>
                                    </div>)
                            }
                            </div>

        <Form onSubmit={handleSubmit} className='ms-lg-5 me-lg-5 ms-3 me-3'>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                
                <Form.Control name="email" type="email" placeholder="Enter email" required defaultValue={user?.email} readOnly/>

            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
                
                <Form.Control name="phone" type="text" placeholder="Phone Number" required />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
                
                <Form.Control name="meeting" type="text" placeholder="Meeting Location" required />
            </Form.Group>
            
            <Button variant="primary" type="submit" className='mb-5'>
                Submit
            </Button> <br />

            {/* <Form.Text className="text-danger">
             <h4>{error}</h4>
            </Form.Text> */}
            
        </Form>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>

        </div>
    );
};

export default AllDevice;