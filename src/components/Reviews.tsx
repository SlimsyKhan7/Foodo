import { Container } from "react-bootstrap";
import Chef from '../assets/chef.svg'
import "./Reviews.css"
import Review from '../assets/review.svg'
import Rating from '../assets/rating.svg'

export function Reviews() {
    return (
        <Container className="flex mt-96 font-poppins">
            <img src={Chef} alt="" />
            <div className="mt-44">
                <h1 className=" font-semibold red1 text-lg tracking-wider">WHAT THEY SAY</h1>
                <h2 className="text-5xl font-bold black1 mt-4">What Our Customers Say About Us</h2>
                <p className="black1 font-medium text-lg mt-5">“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.</p>
                <div className="flex flex-col mt-5">
                    <div className="flex items-center">
                        <img src={Review} alt="" />
                        <div className="flex flex-col ml-5">
                            <h3 className="font-semibold text-black tracking-wider text-lg">Theresa Jordan</h3>
                            <p className="gray1 ">Food Enthusiast</p>
                        </div>
                    </div>
                    <div className="flex mt-5 items-center">
                        <img src={Rating} alt="" />
                        <h4 className="font-medium ml-4">4,8</h4>
                    </div>
                </div>
            </div>
        </Container>
    )
}