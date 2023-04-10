import React from 'react';
import wall from './Assets/wall.jpeg'

const Main = () => {
    return (
        <div className={"relative w-full h-[90vh] m-auto"}>
            <img className={' w-full h-full object-cover'} src={wall} alt={"wall"}/>
            <div className={" flex flex-col justify-center items-center text-center m-auto text-white"}>
                <p className={"max-w-[800px] top-[40%] absolute text-center text-[27px]"}>Furniture designed to live in
                    harmony, creating distinctive and timeless spaces</p>
                <p className={"top-[50%] absolute text-center mt-[100px] font-bold text-[20px] border px-8 py-3"}>Discover now</p>
            </div>
        </div>
    );
};

export default Main;
