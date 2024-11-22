import './Products.css';
import { GoArrowRight } from "react-icons/go";
import ProductCard from '../Products/ProductCard';
import useProductData from './DataProduct';
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
            <ProductCard key={el.id} image={el.image} title={el.title} price={el.price} id={el.id} />
);
            })}
            </div>
            <div className='foot'>
            <button className='btn'>Voir plus <GoArrowRight />
            </button>
            </div>
        </main>
    );
}