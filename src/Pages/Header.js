import React, { useContext, useEffect, useState } from 'react';
import { Container,Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';




const Header = () => {
    

    

    const {user, logOut} = useContext(AuthContext);
console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    // const [quiz, setQuiz] = useState([]);
    // useEffect( ()=>{
    //     axios.get('https://b-assignment12-server.vercel.app/users')
    //     .then(data => {
    //         const dataLoaded = data.data; 
    //          console.log(dataLoaded);
    //         const quizData = dataLoaded.map(quiz =>{
    //             const singleData ={
    //                 Name: quiz.name,
    //                 Role: quiz.role
    //             }
    //             return singleData;
    //         })
    
    //          console.log(quizData)
    //         setQuiz(quizData);
    //     })
    // } ,[])

    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/emaila?name=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])
    
      console.log(review)



    




    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className=''  expand="lg" bg="light" variant="light">
            <Container>
                {/* <img src={c} className="imageC1" alt="" /> */}
                <Navbar.Brand><Link className='blog-name' to='/'>Buy-Sell Bangladesh</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='blog-container' to='/'>Home</Link>  
                        <Link className='blog-container' to='/blog'>Blog</Link>  
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <Link className='blog-container' to='/addservices'>Sell Here</Link>
                                        <Link className='blog-container' to='/allUsers'>Dash Board</Link> */}
                                        <Link className='blog-container' onClick={handleLogOut}>Log out</Link> 
                                        <Link className='blog-container' to='/myOrder'>My Order</Link>
                                        {/* <Link className='blog-container' to='/myProducts'>My Products</Link> */}
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container' to='/login'>Login</Link> 
                                        <Link className='blog-container' to='/register'>Register</Link> 
                                    </>
                            }

                        </>
                        <div>
                            {
                                review.map((a) =><div className='d-flex' key={a._id}>
                                
                                
                                <>
                                { a?.role === 'admin' ? <Link className='blog-container' to='/allUsers'>All Buyer & All Seller</Link>
                                    :
                                    a?.role === 'seller' ? <Link className='blog-container' to='/addservices'>Sell Here</Link> 
                                    :
                                    a?.role === 'customer' && <Link className='blog-container' to='/myOrder'>My Order</Link>
                                }
                                </>
                                    </div>)
                            }

                        </div>

                        <div>
                            {
                                review.map((a) =><div className='d-flex' key={a._id}>
                                    <>
                                    { a?.role === 'seller' && <Link className='blog-container' to='/myProducts'>My Products</Link>
                                    
                                    }

                                    </>

                                    </div>)
                            }
                        </div>
                        
                        <div  to="/profile">
                            {user?.photoURL ?
                                
                                <Image
                                                    style={{ height: '35px', width:'35px', marginRight: '10px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                
                               
                                : <FaUser></FaUser>
                            }
                        </div>
                          
                        
                    </Nav><br />
                    <div>
                            {user?.displayName}
                    </div> 
                    
                     
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;