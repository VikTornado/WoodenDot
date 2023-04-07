import React from 'react';
import lamp from './Assets/FrameLamp.svg'
import star from './Assets/star.svg'
import list from './Assets/list.svg'
import paper from './Assets/paper.svg'

const ItemsBlock = () => {
    const ItemsBlock = [
        {
            img: lamp,
            title: "FOOTPRINT",
            text: "We are committed to look after what we love, nature.",
            btn: "Learn More",
            id: 1
        },
        {
            img: star,
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
    return (
        <div className={"max-w-[1440px] m-auto p-4 flex"}>
            <div className={"flex w-[360] h-[360px]"}>
                {ItemsBlock.map((item) => {
                    console.log(item.img)
                    return (
                        <div key={item.title} className={"flex flex-col"}>
                            <img className={""} alt={item.title} src={item.img}/>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <span>{item.btn}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ItemsBlock;