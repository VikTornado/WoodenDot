import React, {useState} from 'react';
import lamp from './Assets/FrameLamp.svg'
import hands from './Assets/hands.svg'
import list from './Assets/list.svg'
import paper from './Assets/paper.svg'

const ItemsBlock = () => {
    const [ color, setColor ] = useState([]);
    // const [ backgroundColor ] = useState('#f44');

    const ItemsBlock = [
        {
            img: lamp,
            title: "FOOTPRINT",
            text: "We are committed to look after what we love, nature.",
            btn: "Learn More",
            id: 1
        },
        {
            img: hands,
            title: "MADE",
            text: "Our local design, and production in the village of Iscar, Spain.",
            btn: "Learn More",
            id: 2
        },
        {
            img: list,
            title: "WOOD",
            text: "Our characteristic and main material, and its unique and timeless attributes.",
            btn: "Learn More",
            id: 3
        },
        {
            img: paper,
            title: "DESIGN",
            text: "We create furniture pieces with personality, designed to transform your space.",
            btn: "Learn More",
            id: 4
        },
    ]



    console.log(ItemsBlock)
    return (
        <div className={"max-w-[1440px] m-auto"}>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"}>
                {ItemsBlock.map((item, id) => {
                    return (
                        <div className={"bg-[#F7F7F7]"}>
                            <div key={item.title} className={"px-2"}>
                                <img className={"pt-[63px] pb-[35px] flex m-auto"} alt={item.title} src={item.img}/>
                                <h3 className={"text-[24px] pb-[12px] text-center"}>{item.title}</h3>
                                <p className={"text-center text-[15px] leading-7 pb-[25px]"}>{item.text}</p>
                                <p className={"text-center pb-[50px] underline cursor-pointer"}>{item.btn}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ItemsBlock;