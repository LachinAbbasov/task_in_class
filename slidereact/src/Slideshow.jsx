import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';


const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Carousel autoplay effect="fade">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', maxHeight: '500px' }} />
                </div>
            ))}
        </Carousel>
    );
};

// Example usage:
const images = [
    'https://media.istockphoto.com/id/1455089606/photo/downtown-baku-azerbaijan-skyline.jpg?s=612x612&w=0&k=20&c=HyEBCfOaod-gK0f8TFa64h2D_l5EA51EghgTRkhtiwk=',
    'https://media.istockphoto.com/id/1155534368/photo/baku-azerbaijan-view-of-the-city-and-flower-tower-skyscrapers.webp?b=1&s=170667a&w=0&k=20&c=ukqyWGFuMsLIlwlA_gRx4nRNOaJFyOw_-1-2gCLJMN0=',
    'https://st.depositphotos.com/2049931/2126/i/450/depositphotos_21265999-stock-photo-baku.jpg',
    'https://t3.ftcdn.net/jpg/02/31/14/86/360_F_231148604_0hQFi09fYKlV0J7jnBVCIFR8sTCOI3J9.jpg',
    'https://c8.alamy.com/comp/2BXG8X3/baku-city-azerbaijan-view-of-the-modern-skyline-on-the-caspian-sea-coast-2BXG8X3.jpg',
    'https://www.shutterstock.com/image-photo/panoramic-image-baku-azerbaijan-600nw-2061288494.jpg',
    'https://ulduztourism.az/wp-content/uploads/2017/09/sumqayit-1.jpg',
    'https://i.ytimg.com/vi/zH90TAOgsOk/mqdefault.jpg?days_since_epoch=19814'
];

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Baku</h1>
            <Slideshow images={images} />
        </div>
    );
};

export default App;
