import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


// 
const AddSingleService = ({service}) => {
    // console.log(service);
    const {img, name, _id } = service;

    //Auth User
    const { user } = useContext(AuthContext);

    //imagebb
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)



    //Adding Review
    const handleSale = event =>{
        event.preventDefault();
        const form = event.target;
        const name1 = form.fName.value;
        const email = form.email.value;
        const deviceModel = form.dModel.value;
        const PhotoURL = form.ImageURL.value;
        const location = form.location.value;
        const rPrice = form.rPrice.value;
        const oPrice = form.oPrice.value;
        const uses = form.uses.value;
        const date = form.date.value;

        // const image = event.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        

        
        const rev = {
            category: _id,
            userName: name1,
            email,
            deviceModel,
            PhotoURL,
            location,
            rPrice,
            oPrice,
            uses,
            date
        }

        fetch('https://b-assignment12-server.vercel.app/allmobile', {
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
                alert('Product Added Successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));



    }

    const [sDate,setSDate] = useState(new Date());
    return (
        <div className='border border-danger border-4 m-5'>
            <h3 className='d-grid justify-content-center m-5 bg-info '>Add your used phone for: {name}</h3>
            <div>
                <div className='Review p-1'>
               
                    <form onSubmit={handleSale}>
                        <div className='service-container'>
                       <input name="fName" type="text" placeholder="Your Name" className="" required />
                       <input name="dModel" type="text" placeholder="Device Model" className="" required />
                       <input name="location" type="text" placeholder="Location" className="" required />
                       <input name="rPrice" type="text" placeholder="Resale Price" className="" required />
                       <input name="oPrice" type="text" placeholder="Original Price" className="" required />
                       <input name="uses" type="text" placeholder="Years of Use" className="" required />
                       <input name="date" type="text" placeholder="Selling Date" className="" defaultValue={format(sDate, 'PP')} required readOnly />
                       <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="" required readOnly />
                       <input name="ImageURL" type="text" placeholder="Image URL" className="" required />
                       
                        </div>
                        <input className='blog-container service-container mb-5' type="submit" value="Sell" />
                    </form>
                </div> 
                <div className='d-none'>
                <DayPicker 
                mode='single'
                selected={sDate}
                onSelect={setSDate}
                />
                </div>
            </div>
        </div>            
                          
                
    );
};

export default AddSingleService;