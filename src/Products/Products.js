import './Products.css';
import { GoArrowRight } from "react-icons/go";
import ProductCard from '../Products/ProductCard';
import useProductData from './DataProduct';
import {Link} from 'react-router-dom';
export default function Product(){
    const data = useProductData();
    const mainData = data.slice(0,4); 
    return(
        <main className="product">
            <div className='product-head'>
            <h2 className="product-title">SOLDES - JUSQU'À 50% DE RÉDUCTION</h2>
            </div>
        <div className='profuct-container'>  
        {mainData.map((el,index)=>{return(
            <ProductCard key={el.id} image={el.image} title={el.title} price={el.price} id={el.id} produit={el} />
);
            })}
            </div>
            <div className='foot'>
            <button className='btn'><Link to='allproduct' className='link'>
            Voir plus <GoArrowRight /></Link>
            </button>
            </div>
        </main>
    );
}