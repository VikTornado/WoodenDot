import React from 'react';
import img from "./Assets/batea.png";

const BateaPage = () => {
    return (
        <div className={"max-w-[1440px] bg-[#F7F7F7] h-auto m-auto grid grid-cols-1 md:grid-cols-2"}>
            <div className={"w-full h-full text-center px-6 flex flex-col justify-center pb-6 md:text-right"}>
                <h2 className={"text-[36px] font-bold pb-[4px]"}>Batea Collection</h2>
                <p className={"italic text-2xl pb-[20px]"}>Tables with storage & tray tables</p>
                <p className={"text-[15px] pb-[12px]"}>From $ 5333</p>
                <p className={"text-[18px] text-[#525252] pb-[66px] leading-10 md:pb-2 leading-5"}>Composed of clean and
                    rounded lines, the Batea Collection includes unique tables with extra functionality like a removable
                    tray, and hidden storage.</p>
                <p className={"text-[17px] font-bold underline"}>Shop now</p>
            </div>
            <div className={"pb-[30px]"}>
                <img className={"w-full h-full object-cover"} src={img} alt={"img"}/>
            </div>
        </div>
    );
};

export default BateaPage;