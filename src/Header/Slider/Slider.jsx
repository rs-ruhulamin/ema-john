import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';

const Slider = () => {
    const images = [
        "../../../public/assets/slider/slider0.jpg",
        "../../../public/assets/slider/slider1.jpg",
        "../../../public/assets/slider/slider2.jpg",
        "../../../public/assets/slider/slider3.jpg",
        "../../../public/assets/slider/slider4.jpg"
    
    ];

    const options = {
        loop: true,
        center: true,
        margin: 0,
        items: 1, // corrected property name
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <OwlCarousel className="owl-theme" {...options}>
                            {images.map((imageUrl, index) => (
                                <div key={index} className="item">
                                    <img src={imageUrl} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
