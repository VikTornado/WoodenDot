import React from 'react';
import trust from '../Components/Assets/trust.svg'
import fsc from '../Components/Assets/fsc.svg'
import planted from '../Components/Assets/planted.svg'

const Footer = () => {
    return (
        <div className={"max-w-[1440px] m-auto bg-[#E9E9E9] pb-[100px]"}>
            <div className={'max-w-[1040px]  text-center justify-between md:flex m-auto px-4'}>
                <div className={'pt-[56px]'}>
                    <h4 className={"uppercase pb-[45px] text-[21px]"}>About</h4>
                    <ul>
                        <li className={"text-[14px] mb-[10px]"}>About us</li>
                        <li className={"text-[14px] mb-[10px]"}>Design</li>
                        <li className={"text-[14px] mb-[10px]"}>Sustainability</li>
                        <li className={"text-[14px] mb-[10px]"}>We plant trees</li>
                        <li className={"text-[14px] mb-[10px]"}>Our Story</li>
                        <li className={"text-[14px] mb-[10px]"}>Awards</li>
                    </ul>
                </div>
                <div className={"pt-[56px]"}>
                    <h4 className={"uppercase pb-[45px] text-[21px]"}>Help</h4>
                    <ul>
                        <li className={"text-[14px] mb-[10px]"}>Holiday Offers FAQ</li>
                        <li className={"text-[14px] mb-[10px]"}>FAQ</li>
                        <li className={"text-[14px] mb-[10px]"}>Warranty</li>
                        <li className={"text-[14px] mb-[10px]"}>Shipments</li>
                        <li className={"text-[14px] mb-[10px]"}>Returns & Claims</li>
                        <li className={"text-[14px] mb-[10px]"}>Contact us</li>
                    </ul>
                </div>
                <div className={"pt-[56px]"}>
                    <h4 className={"uppercase pb-[45px] text-[21px]"}>More</h4>
                    <ul>
                        <li className={"text-[14px] mb-[10px]"}>Where to find us</li>
                        <li className={"text-[14px] mb-[10px]"}>Woodendot Family</li>
                        <li className={"text-[14px] mb-[10px]"}>Press</li>
                        <li className={"text-[14px] mb-[10px]"}>Affiliates</li>
                        <li className={"text-[14px] mb-[10px]"}>Video Lifestyle</li>
                    </ul>
                </div>
                <div className={"pt-[56px]"}>
                    <div className={"flex flex-col px-8"}>
                        <p className={"text-[15px]"}>Don’t miss any news and exclusive offers!</p>
                        <input type="text" placeholder={"Newsletter subscription"} className={"text-[15px] text-center text-[#000000] border border-2 px-[41px] py-[5px]"}/>
                        <div className={"flex text-center justify-evenly pt-[31px]"}>
                            <img src={fsc} alt=""/>
                            <img src={planted} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;