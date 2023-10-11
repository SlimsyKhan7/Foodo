import { Container } from "react-bootstrap";
import './App.css'
import app from '../../assets/app.svg'
import Delivery from '../../assets/delivery.svg'

export function App() {
    return (
        <Container className="font-poppins mt-24 flex background rounded-3xl justify-between items-center">
            <div>
                <h1 className="font-semibold text-lg red1 tracking-wider ml-10">DOWNLOAD APP</h1>
                <h2 className="black1 font-bold text-5xl max-w-md mt-6 ml-10">Get Started With Fudo Today!</h2>
                <p className="font-medium text-lg max-w-md mt-12 ml-10">Discover food wherever and whenever and get your food delivered quickly.</p>
                <button className="hover:bg-black bgred1 text-white text-lg font-medium px-5 py-3 rounded-full mt-6 ml-10">Get The App</button>
            </div>

            <div>
                <img src={Delivery} alt="" />
            </div>

            <div className="mt-20">
                <img src={app} alt="" />
            </div>
        </Container>
    )
}