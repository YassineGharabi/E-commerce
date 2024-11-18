import './Products.css';
import { useEffect, useState } from 'react';
export default function Product(){

    const [Data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    
    return(
        <main className="product">
            <div className='product-head'>
            <h2 className="product-title">SOLDES - JUSQU'À 50% DE RÉDUCTION</h2>
            </div>
        <div className='profuct-container'>  
        {Data.map((el,index)=>{return(
            <div className="product-card" >
                            <div className="product-card-body">
                            <img src={el.image} alt="" className="product-card-img" />
                            </div>
                            <div className="product-card-foot">
                                <button className='product-card-foot-btn'>Ajouter au panier</button>
                                <span className='product-card-body-price'>{el.price} $ <br/>
                                <del>{el.price - (el.price * 0.5)} $</del>
                                </span>
                            </div>
                        </div>);
            })}
            </div> 
        </main>
    );
}