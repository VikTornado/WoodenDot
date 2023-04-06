import React from 'react';
import img1 from './Assets/1.png'
import img2 from './Assets/2.png'
import img3 from './Assets/3.png'
import img4 from './Assets/4.png'

const PhotoPage = () => {
    return (
        <div className={"max-w-[1440px] m-auto"}>
            <div className={"w-full grid md:grid-cols-2 xl:grid-cols-4"}>
                <img className={"w-full"} src={img1} alt={"img"}/>
                <img className={"w-full"} src={img2} alt={"img"}/>
                <img className={"w-full"} src={img3} alt={"img"}/>
                <img className={"w-full"} src={img4} alt={"img"}/>
            </div>
            <div className={"pb-[115px]"}></div>
        </div>
    );
};

export default PhotoPage;