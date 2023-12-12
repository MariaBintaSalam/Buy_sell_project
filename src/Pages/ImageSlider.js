import React from 'react';
import a from '././../assets/images/a.jpg';
import b from '././../assets/images/b.jpg';
import c from '././../assets/images/c.jpg';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    return (
        <div>
            <div className='container1 mb-5'>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={a}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={b}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block"
                    src={c}
                    alt="Second slide"
                />
                
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default ImageSlider;