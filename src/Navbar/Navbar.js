import logo from "../assets/logo.png"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import './Navbar.css';
export default function Navbar(){
    return(
        <nav className="header container">
            {/* header logo*/}
            <div className="header-logo">
                <span className="logo">E <img src={logo} alt="" className="logo-img" /> Shop</span>
            </div>
            {/* search header */}
            <div className="header-search">
                <input type="text" className="header-input" placeholder="Search...." />
                <button className="header-btn"><IoIosSearch /></button>
            </div>
            {/* icons header */}
            <div className="header-icons">
                <MdOutlineAddShoppingCart className="cart icon" />
                <FaRegHeart className="heart icon" />
            </div>
        </nav>
    );
}