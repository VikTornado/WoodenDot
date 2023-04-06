import React from 'react';
import car from './Assets/car.svg'
import car2 from './Assets/car.svg'
import tree from './Assets/tree.svg'
import map from './Assets/map.svg'
import star from './Assets/star.svg'

const ItemsPage = () => {
    return (
        <div className={"max-w-[1440px] m-auto"}>
            <div className={"hidden w-full sm:flex justify-between items-center m-auto px-4"}>
                <div className={"py-[65px] md:flex items-center text-center"}>
                    <img className={"md:mr-5 m-auto"} src={car} alt={""}/>
                    <p className={" pr-4"}>Awarded Product Design</p>
                </div>
                <div className={"py-[65px] md:flex items-center text-center"}>
                    <img className={"md:mr-5 m-auto"} src={star} alt={""}/>
                    <p className={" pr-4"}>Awarded Product Design</p>
                </div>
                <div className={"py-[65px] md:flex items-center text-center"}>
                    <img className={"md:mr-5 m-auto"} src={map} alt={""}/>
                    <p className={" pr-4"}>Ecofriendly Approach</p>
                </div>
                <div className={"py-[65px] md:flex items-center text-center"}>
                    <img className={"md:mr-5 m-auto"} src={tree} alt={""}/>
                    <p className={" pr-4"}>Crafted in Spain</p>
                </div>
                <div className={"py-[65px] md:flex items-center text-center"}>
                    <img className={"md:mr-5 m-auto"} src={car2} alt={""}/>
                    <p className={" pr-4"}>Awarded Product Design</p>
                </div>
            </div>
        </div>
    );
};

export default ItemsPage;