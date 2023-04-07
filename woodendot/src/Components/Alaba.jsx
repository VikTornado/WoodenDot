import React from 'react';
import img from "./Assets/alaba.png";


const Alaba = () => {
    return (
        <div className={"max-w-[1440px] bg-[#F7F7F7] h-auto m-auto grid grid-cols-1 md:grid-cols-2"}>
            <div className={"w-full h-full text-center px-6 flex flex-col justify-center pb-6 md:text-right"}>
                <h2 className={"text-[36px] font-bold pb-[4px]"}>Alada</h2>
                <p className={"italic text-2xl pb-[20px]"}>Floating folding desk</p>
                <p className={"text-[15px] pb-[12px]"}>From $ 534</p>
                <p className={"text-[18px] text-[#525252] pb-[66px] leading-10 md:pb-2 leading-5"}>A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.</p>
                <p className={"text-[17px] font-bold underline"}>Shop now</p>
            </div>
            <div className={"pb-[30px]"}>
                <img className={"w-full h-full object-cover"} src={img} alt={"img"}/>
            </div>
        </div>
    );
};

export default Alaba;