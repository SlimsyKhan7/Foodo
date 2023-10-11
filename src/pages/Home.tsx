import { Header } from '../containers/Header/Header';
import { Feature } from '../containers/Feature/Feature';
import { Menu } from '../containers/Menu/Menu';
import { Reviews } from '../containers/Reviews/Reviews';
import { App } from '../containers/App/App';
import { Footer } from '../containers/Footer/Footer';

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