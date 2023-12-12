// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useLoaderData } from 'react-router-dom';

// // function Example({x}) 
// const Example = ({x}) =>{
//   const { userName, email, deviceModel, PhotoURL, location, rPrice, oPrice, uses, date } = x;


//     // const a = useLoaderData();
//     // const {_id, name, img, deviceModel} = a;
//     // console.log(a)
    
//     // const [review, setreview] = useState([])
//     // useEffect(() => {
//     //     fetch(`https://b-assignment12-server.vercel.app/reviewss?category=${_id}`)
//     //         .then(res => res.json())
//     //         .then(data => setreview(data))
//     // }, [_id])




//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);



//   return (
//     <>
//       {/* <Button variant="primary" onClick={handleShow}>
//         Book Now
//       </Button> */}

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
          
//         </Modal.Body>
//                         <div className='p-3'>
//                         {/* {
//                             review.map(x => <div
//                                 key={x._id}
//                                 x={x}
                                
//                             >
//                                 <p>{x.deviceModel}</p>
//                                 <p>{x.oPrice}</p>
//                             </div>)
//                         } */}
//                         <p>{deviceModel}</p>
//                         <p>{oPrice}</p>
//                         </div>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
          
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;