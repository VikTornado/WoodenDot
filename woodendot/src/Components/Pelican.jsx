import React from 'react';
import img from "./Assets/Pelican.png";

const Pelican = () => {
    return (
        <div className={"max-w-[1440px] bg-[#F7F7F7] h-auto m-auto grid grid-cols-1 md:grid-cols-2"}>
            <div className={"order-2 pb-[30px] md:order-1"}>
                <img className={"w-full h-full object-cover"} src={img} alt={"img"}/>
            </div>
            <div className={" w-full h-full text-center px-6 flex flex-col justify-center pb-6 md:text-right order-1"}>
                <h2 className={"text-[36px] font-bold pb-[4px]"}>Pelican</h2>
                <p className={"italic text-2xl pb-[20px]"}>Shelves with hidden hooks</p>
                <p className={"text-[15px] pb-[12px]"}>From $ 89</p>
                <p className={"text-[18px] text-[#525252] pb-[66px] leading-10 md:pb-2 leading-5"}>Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch.</p>
                <p className={"text-[18px]"}>+ 3 sizes, + 5 color finishes</p>
                <p className={"text-[17px] font-bold underline"}>Shop now</p>
            </div>
        </div>
    );
};

export default Pelican;