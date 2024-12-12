import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import { FiArrowRightCircle } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='flex flex-row relative'>
            <div className='text-6xl absolute top-0'><IoIosArrowDropleft /></div>
            <div> <img src="https://www.holland.com/upload_mm/2/4/4/80160_fullimage_rondvaartboot%20vaart%20onder%20brug%20door%20met%20mooie%20wolkenlucht%20%C2%A9%20illusion-x%20via%20pixabay_1150x663_438x353.jpg" alt="" className='h-100  w-screen' /></div>
            <div className='text-6xl absolute right-0'><FiArrowRightCircle /></div>
        </div>
    )
}

export default Banner
