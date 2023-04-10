import React from 'react';
import {ImageFirms} from '../state'

const Talking = () => {
    return (
        <div className={"max-w-[1440px] m-auto"}>
            <div className={"bg-[#F7F7F7] flex flex-col text-center"}>
                <p className={"text-[20px] text-center pt-6 pb-[40px]"}>Those who are talking about us...</p>
                {ImageFirms.map((name) => {
                    return (
                        <div className={"flex"}>
                            <ul className={"flex"}>
                                <li className={""}>
                                    {name.name}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Talking;