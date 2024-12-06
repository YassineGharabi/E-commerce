import { CiBookmarkRemove } from "react-icons/ci";
import { hiddenSelector } from "../../stateManagment/store/productSelector";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../stateManagment/features/productSlice";
export default function CartComponent({image,title,price,id}){

    const produitStore = useSelector(hiddenSelector);
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        dispatch(removeProduct({
            id:id
        }))
    } 


    return (
        <div className='cart-produit'>
        <div className="cart-produit-img-container">
            <img src={image} className="cart-produit-img" alt={title} />
        </div>
        <div className='cart-produit-info'>
            <p className="cart-produit-title">{title}</p>
            <p className="cart-produit-price">{price} $</p>
            <p className="cart-produit-quantity">Quantité : {produitStore.qteProduct}</p>
        </div>
        <div className='cart-produit-remove'>
            <span >
                <CiBookmarkRemove className="cart-produit-remove-icon" onClick={()=>{handleRemoveItem(id)}} />
            </span>
        </div>
    </div>
    )
}