// import { useState } from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useProductData from "./DataProduct";
import { addProducts } from "../stateManagment/features/productSlice";
import { hiddenSelector } from "../stateManagment/store/productSelector";
export default function ProductCard(props){

    const data = useProductData();
    const dispatch = useDispatch();
    
    const AjouterAuPanier = (produit) => {
        dispatch(addProducts(produit));
    }


    return(
        <div className="product-card" key={props.id} >
        <div className="product-card-body">
        <img src={props.image} alt="" className="product-card-img" />
        </div>
        <div className="product-card-foot">
            <div className='product-information'>
            <span className='product-card-body-title'>{props.title.length > 30 ? `${props.title.slice(0,30)}...` : props.title.slice(0,30)}</span>
            <span className='product-card-body-price'>
            <del>{props.price - (props.price * 0.5)} $</del>
            {props.price} $ 
            </span>
            </div>
            <button className='product-card-foot-btn' onClick={()=>AjouterAuPanier(props.produit)} >Ajouter au panier</button> 
        </div>
    </div>
    );
}