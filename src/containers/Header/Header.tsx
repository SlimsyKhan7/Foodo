import { Container } from 'react-bootstrap'
import './Header.css'
import Cherry from '../../assets/cherry.svg'
import Play from '../../assets/play.svg'
import People from '../../assets/people.svg'
import Star from '../../assets/star.svg'

export function Header() {
    return (
        <header className='flex'>
            <Container className='font-poppins'>
                <button className='hover:opacity-50 font-medium red1 flex pink1 px-4 py-3 rounded-full mt-28'>
                    More than Faster <img className='ml-4' src={Cherry} />
                </button>
                <h1 className='font-bold text-7xl max-w-xl black1 mt-16'>Be The Fastest In Delivering Your <span className='red1'>Food</span></h1>
                <p className='font-medium text-lg black1 max-w-lg'>Our job is to fill your tummy with delicious food and with fast and free delivery</p>
                <div className='flex mt-4'>
                    <button className='text-white hover:bg-black bgred1 rounded-full px-5 py-4 mr-10'>Get Started</button>
                    <div className='flex items-center'>
                        <button className='hover:opacity-50 white1 rounded-full p-3 mr-2'><img src={Play} alt="" /></button>
                        <h2 className='black1 font-medium text-lg'>Watch Video</h2>
                    </div>
                </div>
                <div className='flex mt-20 gap-4'>
                    <img src={People} alt="" />
                    <div className=''>
                        <h2 className='font-bold text-lg'>Our Happy Customer</h2>
                        <a className='flex gap-1' href="#Reviews"><img src={Star} alt="" /><span className="font-bold">4,8</span> <span className='gray1'>(12.5k Review)</span></a>
                    </div>
                </div>
            </Container>   

           <div className='mt-32'>
                <div className='bgred1 p-60 rounded-full'></div>
            </div>
        </header>
    )
}