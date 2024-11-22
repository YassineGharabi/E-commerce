// import { useState } from "react";
// import { useEffect } from "react";
import useProductData from "./DataProduct";
export default function ProductCard(props){

    const data = useProductData();
    
    async function AjouterAuPanier(id){
        //recuperer le produit
        let product = await data.filter((el) => el.id === id)[0];
        //ajouter le produit au panier au localstorage

        //declarer panier
        let panier;

        //verifier si le panier est vide
        if(window.localStorage.getItem('panier') == null){

        //initialiser le panier
            panier = [product];
        //enregistrer le panier au localstorage
            window.localStorage.setItem('panier',JSON.stringify(panier));
            window.localStorage.setItem('qtePanier',JSON.stringify(panier.length));
        }else{
            //si le panier n'est pas vide
            //recuperer le panier
            let oldData = JSON.parse(window.localStorage.getItem('panier'));
            //ajouter le produit et oldData au panier  
            panier = [...oldData,product];
            window.localStorage.setItem('panier',JSON.stringify(panier));
            window.localStorage.setItem('qtePanier',JSON.stringify(panier.length));
        }
    }
    


    return(
        <div className="product-card" key={props.id} >
        <div className="product-card-body">
        <img src={props.image} alt="" className="product-card-img" />
        </div>
        <div className="product-card-foot">
            <div className='product-information'>
            <span className='product-card-body-title'>{props.title}</span>
            <span className='product-card-body-price'>
            <del>{props.price - (props.price * 0.5)} $</del>
            {props.price} $ 
            </span>
            </div>
            <button className='product-card-foot-btn' onClick={()=>AjouterAuPanier(props.id)} >Ajouter au panier</button> 
        </div>
    </div>
    );
}