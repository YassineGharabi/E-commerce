import { CiBookmarkRemove } from "react-icons/ci";
export default function CartComponent({image,title,price,id}){

    const handleRemoveItem = (id) => {
        let panier = JSON.parse(window.localStorage.getItem('panier'));
        window.localStorage.removeItem('panier');
        panier = panier.filter((el) => el.id !== id);
        window.localStorage.setItem('panier',JSON.stringify(panier));
    };
    
    const panier = JSON.parse(window.localStorage.getItem('panier'));
    const quantite = panier.filter((el) => el.id === id).length;


    return (
        <div className='cart-produit'>
        <div className="cart-produit-img-container">
            <img src={image} className="cart-produit-img" alt={title} />
        </div>
        <div className='cart-produit-info'>
            <p className="cart-produit-title">{title}</p>
            <p className="cart-produit-price">{price} $</p>
            <p className="cart-produit-quantity">Quantité : {quantite}</p>
        </div>
        <div className='cart-produit-remove'>
            <span >
                <CiBookmarkRemove className="cart-produit-remove-icon" onClick={()=>{handleRemoveItem(id)}} />
            </span>
        </div>
    </div>
    )
}