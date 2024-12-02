import Categorie from '../../Categorie/Categorie';
import Hero from '../../Hero/Hero';
import Navbar from '../../Navbar/Navbar';
import Product from '../../Products/Products';
import Footer from '../../Footer/Footer';
import Nosservice from '../../Nosservice/Nosservice';
import Slider from '../../Slideer/Slider';
export default function LandingPage(){
    return(
        <>
                <Navbar/>
                <Hero/>
                <Categorie/>
                <Product/>
                <Slider/>
                <Nosservice/>
                <Footer/>
        </>
    );
}