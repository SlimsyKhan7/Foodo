import { Container } from "react-bootstrap";
import Feature1 from "../../assets/feature1.svg"
import Feature2 from "../../assets/feature2.svg"
import Feature3 from "../../assets/feature3.svg"

export function Feature() {
    return (
        <Container className="font-poppins flex flex-col max-w-6xl text-center mt-32">
            <h1 className="text-lg  font-bold red1 tracking-wide">WHAT WE SERVE</h1>
            <h2 className="font-bold black1 text-5xl mt-6 max-w-lg mx-auto text-center">Your Favorite Food Delivery Partner</h2>
            <div className="flex items-center justify-center gap-44 mt-16">
                <img src={Feature1} alt="" />
                <img src={Feature2} alt="" />
                <img src={Feature3} alt="" />
            </div>
            <div className="flex items-center gap-32">
                <div>
                    <h2 className="font-bold text-3xl">Easy To Order</h2>
                    <p className="font-medium black1 mt-4 text-lg">You only need a few steps in ordering food</p>
                </div>
                <div>
                    
                    <h2 className="font-bold text-3xl">Fastest Delivery</h2>
                    <p className="font-medium black1 mt-4 text-lg">Delivery that is always ontime even faster</p>
                </div>
                <div>
                    
                    <h2 className="font-bold text-3xl">Best Quality</h2>
                    <p className="font-medium black1 mt-4 text-lg">Not only fast for us quality is also number one</p>
                </div>
            </div>

        </Container>
    )
}