import { Container } from "react-bootstrap";
import './Menu.css';
import { Carousels } from '../../components/Carousels/Carousels';
import Pizza from '../../assets/pizza.svg'
import Burger from '../../assets/burger.svg'
import Cupcake from '../../assets/cupcake.svg'
import Ramen from '../../assets/ramen.svg'
import Icecream from '../../assets/icecream.svg'
import Pizza2 from '../../assets/pizza2.svg'
import Burger2 from '../../assets/burger2.svg'
import Cupcake2 from '../../assets/cupcake2.svg'
import Ramen2 from '../../assets/ramen2.svg'
import Icecream2 from '../../assets/icecream2.svg'
import { useState } from 'react'

export function Menu() {

    const [isItemsVisible, setIsItemsVisible] = useState(false);
    const [image, setImage] = useState(Pizza)
    const [image2, setImage2] = useState(Pizza)
    const [title1, setTitle1] = useState("N/A")
    const [title2, setTitle2] = useState("N/A")

    const click = (color:string,id:string,id2:string,id3:string,id4:string,id5:string,img:string,img2:string,text1:string,text2:string) => {
        const myElement = document.getElementById(id) as HTMLElement;
        myElement.style.backgroundColor = color;
        myElement.style.color = "white";
        var elementIds = [id2, id3, id4, id5];
        setIsItemsVisible(true);
        setImage(img)
        setImage2(img2)
        setTitle1(text1)
        setTitle2(text2)
        
        elementIds.forEach(function(id) {
            var element = document.getElementById(id) as HTMLElement;
            element.style.backgroundColor = "white"
            element.style.color = "black";
        });
    }

    return (
        <Container className="font-poppins mt-32 order-2">
            <h1 className="font-semibold text-lg red1 tracking-wider">OUR MENU</h1>
            <h2 className="text-5xl font-bold max-w-xl">Menu That Always Makes You Fall In Love</h2>
                
            <div className="flex justify-between mt-24">
                <div className="flex flex-col font-medium text-2xl float-left">
                    <button id="B" onClick={() => click('#EB5757', "B", "P","C","R", "I",Burger,Burger2,"Beef Burger","Chicken Burger")} className="hover:bg-red-300 px-7 py-4 rounded-full">Burger</button>
                    <button id="P" onClick={() => click('#EB5757', "P", "B","C","R", "I",Pizza,Pizza2,"Italian Pizza","Sausage Pizaa")} className="hover:bg-red-300 px-7 py-4 rounded-full">Pizza</button>
                    <button id="C" onClick={() => click('#EB5757', "C", "P","B","R", "I",Cupcake,Cupcake2,"Cupcake","Chocolate Cupcake")} className="hover:bg-red-300 px-7 py-4 rounded-full">Cupcake</button>
                    <button id="R" onClick={() => click('#EB5757', "R", "P","C","B", "I",Ramen,Ramen2,"Chicken Ramen","Tonkotsu Ramen")} className="hover:bg-red-300 px-7 py-4 rounded-full">Ramen</button>
                    <button id="I" onClick={() => click('#EB5757', "I", "P","C","R", "B",Icecream,Icecream2,"Ice Cream 1","Ice Cream 2")} className="hover:bg-red-300 px-7 py-4 rounded-full">Ice Cream</button>
                </div>
                
                {isItemsVisible && (
                    <Carousels img={image} img2={image2} title1={title1} title2={title2} price1={7.49} price2={6.48}/>
                )}
                

    
            </div>    
        </Container>
    )
}