import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer>
            <div  className="footer-container" >
            <div className="foot-item">
                <h4 className="foot-item-title">produits</h4>
                <ul className="foot-item-list">
                    <li><a href="#">vetements</a></li>
                    <li><a href="#">accessoires</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">monitore</a></li>
                </ul>
            </div>
            <div className="foot-item">
                <h4 className="foot-item-title">Categories</h4>
                <ul className="foot-item-list">
                    <li><a href="#">Hommes</a></li>
                    <li><a href="#">Femmes</a></li>
                    <li><a href="#">Enfants</a></li>
                </ul>
            </div>
            <div className="foot-item">
                <h4 className="foot-item-title">contact</h4>
                <ul className="foot-item-list">
                    <li><a href="#">nos magasins</a></li>
                    <li><a href="#">+212 6 00 00 00</a></li>
                    <li><a href="#">Eshop-ma@gmail.com</a></li>
                </ul>
            </div>
            <div className="foot-item">
                <h4 className="foot-item-title">Suivez-Nous</h4>
                <ul className="foot-item-list">
                    <li><a href="#" className='reso'><FaFacebookSquare id='icon' /> fa-e-shop</a></li>
                    <li><a href="#" className='reso'><FaInstagram id='icon' /> i-e-shop</a></li>
                    <li><a href="#" className='reso'><FaTwitter id='icon' />t-e-shop</a></li>
                    <li><a href="#" className='reso'><AiFillTikTok id='icon' /> tok-e-shop</a></li>
                    <li><a href="#" className='reso'><FaYoutube id='icon' /> y-e-shop</a></li>
                </ul>
            </div>
            </div>
            <div className="foot-end">
                <p>© 2023 Copyright: Eshop-ma</p>
            </div>
        </footer>
    );
}