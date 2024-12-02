import './Cart.css';
import CartComponent from './CartComponent';
export default function Cart({panier}){
    
    let products = panier;
    const displayCart = products.map((el,index)=>(<CartComponent image={el.image} title={el.title} price={el.price} key={index} id={el.id} />));


    return(
        <div className="cart-container">
             { panier.length > 0 ? displayCart : <p className="cart-empty">panier vide !</p>}
        </div>
    );
}