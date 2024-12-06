import { useSelector } from 'react-redux';
import { hiddenSelector } from '../../stateManagment/store/productSelector';
import './Cart.css';
import CartComponent from './CartComponent';
export default function Cart(){
    

    const produitStore = useSelector(hiddenSelector);
    const displayCart = produitStore.products.map((el,index)=>(<CartComponent image={el.image} title={el.title} price={el.price} key={index} id={el.id} />));


    return(
        <div className="cart-container">
             { produitStore.products.length > 0 ? displayCart : <p className="cart-empty">panier vide !</p>}
        </div>
    );
}