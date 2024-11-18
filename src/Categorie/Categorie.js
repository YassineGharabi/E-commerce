import { GoArrowRight } from "react-icons/go";
import './Categorie.css';
export default function Categorie() {

    const data = [
        {id:'1',namebtn:'hommes',bgi:require('../assets/hommes.jpg')},
        {id:'2',namebtn:'femmes',bgi:require('../assets/femmes.jpg')},
        {id:'3',namebtn:'enfants',bgi:require('../assets/enfants.jpg')}
    ];


    return (
        <div className='categories'>
            <div className='categories-head'>
                <h2 className="categories-title">POPULAIRE CATEGORIES</h2>
            </div>
            <div className='categories-container'>
            {data.map((el,index)=>{
                return(
                    <div className='categories-card'  key={el.id} style={{backgroundImage:`url(${el.bgi})`}} >
                    <button className='categories-card-btn'>{el.namebtn} <GoArrowRight />
                    </button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}