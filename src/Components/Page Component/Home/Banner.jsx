import React, { useEffect, useLayoutEffect } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    const images = [
        'https://i.pinimg.com/736x/3a/b6/f0/3ab6f061cbc449ee858188a9ff3f4b25.jpg',
        'https://i.pinimg.com/736x/76/e6/cb/76e6cb3049c9bc5fbf4d691e37660b38.jpg'
        
    ];

    const [slide, setSlide] = useState(0)
    function nextInd() {
        if (images.length - 1 == slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }
    function prevInd() {
        if (slide == 0) {
            setSlide(images.length - 1)
        } else {
            setSlide(slide - 1)
        }
    }

    //    useEffect(() => {
    //       let interval;

    //       interval = setTimeout(()=>{
    //         nextInd()
    //       },2000);

    //      return () => {
    //        clearTimeout(interval)
    //      }
    //    }, [slide])


    return (
        <>
            <div>

                <div className='absolute flex flex-row overflow-clip  '>
                    <div onClick={() => { prevInd() }} className='text-6xl absolute  top-1/2 z-10  bg-gray-200 text-white  py-5  w-fit h-fit cursor-pointer' ><MdOutlineKeyboardArrowLeft /></div>

                    <Carousel  autoPlay interval={1000} showStatus={false} infiniteLoop className='w-full' showThumbs={false} renderIndicator={false} showArrows={false}>
                        {
                            images.map((val, i) => {
                                return (
                                    <img src={val}  className='w-full'/>
                                    // <img src={val} alt="" className={`h-100 w-screen absolute ${i == slide  ? "translate-x-0" : i < slide ?
                                    //     "translate-x-[10000px]" : "-translate-x-[10000px]"} transition-all delay-75 duration-1000  top-0 }`}/>
                                )
                            })
                        }
                    </Carousel  >

                    <div onClick={()=>{nextInd()}} className='text-6xl absolute top-1/2 right-0  bg-gray-200 text-white p-2  cursor-pointer' ><MdOutlineKeyboardArrowRight /></div>
                </div>


            <div className='relative text-white'>
                <div>Fashion Sale</div>
                <div>Minimal Menz Style</div>
                <div>Cohgk alhfajkhf afhjkdsfhkalhsf hfajfhahfujskljk</div>
                <button>Shop Now</button>
            </div>

            </div>
        </>
    )
}
export default Banner














