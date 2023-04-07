import React from 'react';
import img from "./Assets/Pelican.png";

const Alba = () => {
    return (
        <div className={"max-w-[1440px] bg-[#F7F7F7] h-auto m-auto grid grid-cols-1 md:grid-cols-2"}>
            <div className={"order-2 pb-[30px] md:order-1"}>
                <img className={"w-full h-full object-cover"} src={img} alt={"img"}/>
            </div>
            <div className={" w-full h-full text-center px-6 flex flex-col justify-center pb-6 md:text-right order-1"}>
                <h2 className={"text-[36px] font-bold pb-[4px]"}>Alba Collection</h2>
                <p className={"italic text-2xl pb-[20px]"}>Modular bedside table & shelf</p>
                <p className={"text-[15px] pb-[12px]"}>From $ 8229</p>
                <p className={"text-[18px] text-[#525252] pb-[66px] leading-10 md:pb-2 leading-5"}>A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.</p>
                <p className={"text-[18px]"}>+ 6 color finishes, infinite combinations</p>
                <p className={"text-[17px] font-bold underline"}>Shop now</p>
            </div>
        </div>
    );
};

export default Alba;