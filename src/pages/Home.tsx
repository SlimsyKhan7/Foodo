import { Header } from '../components/Header';
import { Feature } from '../components/Feature';
import { Menu } from '../components/Menu';
import { Reviews } from '../components/Reviews';
import { App } from '../components/App';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <>
            <Header />
            <Feature />
            <Menu />
            <Reviews />
            <App />
            <Footer />
        </>
    )
}