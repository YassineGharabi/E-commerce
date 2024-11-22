import logo from "../assets/logo.png"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import './Navbar.css';
export default function Navbar(){

    const produitAuPanier = JSON.parse(window.localStorage.getItem('qtePanier'));


    return(
        <nav className="header container">
            {/* header logo*/}
            <div className="header-logo">
                <span className="logo">E <img src={logo} alt="" className="logo-img" /> Shop</span>
            </div>
            {/* menu items  */}
            <div className="header-menu">
                <ul className="menu">
                    <li className="menu-item">Acceuil</li>
                    <li className="menu-item">Produit</li>
                    <li className="menu-item">A propos</li>
                    <li className="menu-item">Nos services</li>
                </ul>
            </div>
            {/* search header */}
            <div className="header-search">
                <div className="search">
                    <input type="text" className="header-input" placeholder="Rechercher" name="search"/>
                    <button className="header-btn" title="Rechercher"><IoIosSearch /></button>
                </div>
            </div>
            {/* icons header */}
            <div className="header-icons">
                <MdOutlineAddShoppingCart className="cart icon" />
                <span className="cart-quantity">{produitAuPanier}</span>
                <FaRegHeart className="heart icon" />
            </div>
        </nav>
    );
}