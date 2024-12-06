import logo from "../assets/logo.png"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBullseye, FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import './Navbar.css';
import { useEffect, useRef, useState  } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { hiddenSelector } from "../stateManagment/store/productSelector";
import { hiddenPanier } from "../stateManagment/features/productSlice";






export default function Navbar({getSearch}){

    const produitStore = useSelector(hiddenSelector);
    const dispatch = useDispatch();

    
    const inputValue = useRef();
    const handleClick = () => {
        getSearch(inputValue.current.value)
    }

    const handleOpenCart = () => {
        dispatch(hiddenPanier())
    }

    return(
        <nav className="header container">
            {/* header logo*/}
            <div className="header-logo">
                <span className="logo">E <img src={logo} alt="" className="logo-img" /> Shop</span>
            </div>
            {/* menu items  */}
            <div className="header-menu">
                <ul className="menu">
                    <li className="menu-item"><Link to='/'>Acceuil</Link></li>
                    <li className="menu-item"><Link to='/'>Produit</Link></li>
                    <li className="menu-item"><Link to='/'>A propos</Link></li>
                    <li className="menu-item"><Link to='/'>Nos services</Link></li>
                </ul>
            </div>
            {/* search header */}
            {
                window.location.pathname === '/allproduct' ? 
                    <div className="header-search">
                    <div className="search">
                        <input type="text" className="header-input" placeholder="Rechercher" name="search" ref={inputValue} />
                        <button className="header-btn" title="Rechercher"><IoIosSearch onClick={handleClick} /></button>
                    </div>
                    </div>
                : 
                <div className="header-search">
                </div>
            }
            {/* icons header */}
            <div className="header-icons">
                <MdOutlineAddShoppingCart className="cart icon" onClick={handleOpenCart} />
                <span className="cart-quantity"  >{produitStore.countPanier}</span>
                <FaRegHeart className="heart icon" />
                {produitStore.hidden && <Cart/>}
            </div>
        </nav>
    );
}