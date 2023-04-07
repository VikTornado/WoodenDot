import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


const SliderText = () => {
    const sliderText = [
        {text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. " +
                "We placed an order to the UK and would definitely recommend friends to order from Woodendot!", actor: "R. Aoun, United Kingdom" },
  {text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. " +
                "We placed an order to the UK and would definitely recommend friends to order from Woodendot!", actor: "R. Aoun, United Kingdom" },
  {text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. " +
                "We placed an order to the UK and would definitely recommend friends to order from Woodendot!", actor: "R. Aoun, United Kingdom" },
  {text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. " +
                "We placed an order to the UK and would definitely recommend friends to order from Woodendot!", actor: "R. Aoun, United Kingdom" },
  {text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. " +
                "We placed an order to the UK and would definitely recommend friends to order from Woodendot!", actor: "R. Aoun, United Kingdom" },

    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 700, min: 0},
            items: 1
        }
    };
    return (
        <div className={"bg-[#F7F7F7] max-w-[1440px] m-auto pb-[82px]"}>
            <Carousel showDots={true}
                      responsive={responsive}>
                {sliderText.map((item) => {
                    return (
                        <div className={"max-w-[1200px] h-full flex flex-col m-auto text-center mb-10"}>
                            <p className={"font-bold text-[20px] pb-[37px]"}>{item.text}</p>
                            <p className={"mb-[50px]"}>{item.actor}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
};

export default SliderText;