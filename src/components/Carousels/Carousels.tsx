import { Carousel } from "@mantine/carousel"
import { FC } from 'react';
import IconArrowRight from "../../assets/rightarrow.svg"
import IconArrowLeft from "../../assets/leftarrow.svg"
import Arrow from "../../assets/arrow.svg";
import './Carousels.css'

interface Props {
    img: string;
    img2: string;
    title1: string;
    title2: string;
    price1: GLfloat;
    price2: GLfloat;
}

export const Carousels: FC<Props> = ({img, img2, title1, title2, price1, price2}) =>{
    return (
        <Carousel
            maw={800}
            height={508}
            slideSize="70%"
            align="start"
            nextControlIcon={<img src={IconArrowRight} alt="" />}
            previousControlIcon={<img src={IconArrowLeft} alt="" />}
            withIndicators
            loop
            className="z-10"
            styles={{
                controls: {
                    top: -150,
                    left: 680,
                    width: 125,
                    padding: 25,
                    borderRadius: 100,
                    backgroundColor: '#E0E0E0',
                    position: "absolute",
                    }
            }}
        >
            <Carousel.Slide>
                <div className="backgroundpizza rounded-3xl w-436" style={{backgroundImage: `url(${img})`}}>
                    <div className="height508 flex flex-col rounded-3xl background2 order-2">
                        <h1 className="font-medium text-white tracking-wider relative top-80 ml-4 order-2">{title1}</h1>
                        <p className="font-bold text-white text-4xl relative top-80 mt-2 ml-4 order-2"><span className="text-yellow-400 text-2xl mr-2">$</span>{price1}</p>
                        <a className="hover:opacity-50 font-medium text-white text-lg relative top-80 mt-4 ml-4 flex order-2" href="#Order">Order Now<img className="ml-6" src={Arrow} alt="arrow" /></a>
                    </div>
                </div>
            </Carousel.Slide>
            <Carousel.Slide>
                <div className="backgroundpizza rounded-3xl w-436" style={{backgroundImage: `url(${img2})`}}>
                    <div className="height508 flex flex-col rounded-3xl background2 order-2">
                        <h1 className="font-medium text-white tracking-wider relative top-80 ml-4 order-2">{title2}</h1>
                        <p className="font-bold text-white text-4xl relative top-80 mt-2 ml-4 order-2"><span className="text-yellow-400 text-2xl mr-2">$</span>{price2}</p>
                        <a className="hover:opacity-50 font-medium text-white text-lg relative top-80 mt-4 ml-4 flex order-2" href="#Order">Order Now<img className="ml-6" src={Arrow} alt="arrow" /></a>
                    </div>
                </div>
            </Carousel.Slide>
        </Carousel>
    )
}