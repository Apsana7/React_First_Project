import React, { useEffect, useLayoutEffect } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    const banners = [
        {
            image: '/image10.jpeg',
            title: 'Fashion Sale',
            subtitle: 'Minimal Menz Style',
            description: 'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.',
            button: 'Shop Now',
        },
        {
            image: '/image7.jpg',
            title: 'Fashion Sale',
            subtitle: 'Minimal Menz Style',
            description: 'Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.',
            button: 'Shop Now',
        },
    ];



    const [cuurentIndex, setcurrentIndex] = useState(0);

    // const [slide, setSlide] = useState(0)
    // function nextInd() {
    //     if (images.length - 1 == slide) {
    //         setSlide(0)
    //     } else {
    //         setSlide(slide + 1)
    //     }
    // }
    // function prevInd() {
    //     if (slide == 0) {
    //         setSlide(images.length - 1)
    //     } else {
    //         setSlide(slide - 1)
    //     }
    // }

    return (

        <div className='relative h-screen '>
            <Carousel autoPlay
                interval={3000}
                showStatus={false}
                infiniteLoop
                showThumbs={false}
                renderIndicator={false}
                onChange={(index) => setImage(index)
                }>

                {
                    banners.map((banner, index) => (
                        <div key={index} className='relative w-full h-screen'>
                            <img src={banner.image} alt={banner.subtitle} className='w-full h-screen object-cover' />

                            <div className={`absolute inset-y-0 flex items-center ${index%2 ===0  ? 'left-10' : 'right-10'}  p-4 max-w-md  rounded-lg`}>
                            <div className={`text-${banner.position} text-white`}>

                                    <h1 className="text-3xl md:text-4xl text-red-700 font-sans mb-4">
                                        {banner.title}
                                    </h1>
                                    <h2 className=" md:text-4xl  font-semibold text-black  ">
                                        {banner.subtitle}
                                    </h2>
                                    <p className="text-sm md:text-lg  mb-6 text-black">
                                        {banner.description}
                                    </p>
                                    <button className="bg-white text-black px-6 py-3 text-lg rounded hover:bg-gray-700 hover:text-white transition duration-300">
                                        {banner.button}
                                    </button>
                                </div>
                            </div>
                      </div>
                    ))}
            </Carousel>
        </div>
    );
}

export default Banner

