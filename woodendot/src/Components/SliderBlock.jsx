import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import sl1 from '../Components/Assets/sl1.jpeg'
import sl2 from '../Components/Assets/sl2.jpeg'
import sl3 from '../Components/Assets/sl3.jpeg'
import Carousel from "react-multi-carousel";

const SliderBlock = () => {
    const sliderData = [
        {img: sl1},
        {img: sl2},
        {img: sl3},
        {img: sl1},
        {img: sl2},
        {img: sl3},
        {img: sl3},
        {img: sl3},
        {img: sl3},
        {img: sl3},
        {img: sl3},
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 700, min: 0},
            items: 1
        }
    };

    return (
        <div className={"bg-[#F7F7F7] max-w-[1440px] m-auto pb-[82px] text-center"}>
            <h2 className={"pt-[61px] pb-5 text-[30px] text-center"}>Our pieces inside your home</h2>
            <p className={"text-center text-[18px] pb-[37px] "}>Get inspired by our products in real-life. Tag us and be featured!</p>
            <Carousel showDots={true}
                        responsive={responsive}>
                {sliderData.map((item) => {
                    return (
                        <div className={"w-full h-full text-center m-auto grid gap-x-8 mb-10"}>
                            <img className={"w-full"} src={item.img} alt={""}/>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
};

export default SliderBlock;