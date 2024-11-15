import './Products.css';
import { FaRegHeart } from "react-icons/fa";
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
            <h2 className="product-title">shop our top product</h2>
        <div className='profuct-container'>   
        {Data.map((el,index)=>{return(
                            <div className="product-card" key={index}>
                            <div className="product-card-head">
                                <img src={el.image} alt="" className="product-card-img" />
                                <FaRegHeart className="product-card-heart-icon" />
                            </div>
                            <div className="product-card-body">
                            <span className='product-card-body-title'>product number {index}</span>
                            <span className='product-card-body-price'>{el.price}$</span>
                            </div>
                            <div className="product-card-foot">
                                <span className='product-card-foot-rate'>⭐​⭐​⭐​⭐​⭐​</span>
                                <button className='product-card-foot-btn'>Add to cart</button>
                            </div>
                        </div>);
            })}
            </div> 
        </main>
    );
}