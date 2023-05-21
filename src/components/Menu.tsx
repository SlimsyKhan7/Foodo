import { Container } from "react-bootstrap";
import './Menu.css';
import { Carousels } from './Carousels';



export function Menu() {


    return (
        <Container className="font-poppins mt-32 order-2">
            <h1 className="font-semibold text-lg red1 tracking-wider">OUR MENU</h1>
            <h2 className="text-5xl font-bold max-w-xl">Menu That Always Makes You Fall In Love</h2>
                
            <div className="flex justify-between mt-24">
                <div className="flex flex-col font-medium text-2xl float-left">
                    <button className="hover:bg-red-300 px-7 py-4 rounded-full">Burger</button>
                    <button className="hover:bg-red-300 px-7 py-4 rounded-full">Pizza</button>
                    <button className="hover:bg-red-300 px-7 py-4 rounded-full">Cupcake</button>
                    <button className="hover:bg-red-300 px-7 py-4 rounded-full">Ramen</button>
                    <button className="hover:bg-red-300 px-7 py-4 rounded-full">Ice Cream</button>
                </div>
                
                <Carousels/>
            </div>    
        </Container>
    )
}


/* <div className="background mr-28">
    <div className="height508 flex flex-col rounded-3xl background2 order-2">
        <h1 className="font-medium text-white tracking-wider relative top-80 ml-4 order-2">Italian Pizza</h1>
        <p className="font-bold text-white text-4xl relative top-80 mt-2 ml-4 order-2"><span className="text-yellow-400 text-2xl mr-2">$</span>7.49</p>
        <a className="hover:opacity-50 font-medium text-white text-lg relative top-80 mt-4 ml-4 flex order-2" href="#Order">Order Now<img className="ml-6" src={Arrow} alt="arrow" /></a>
    </div>
</div> */