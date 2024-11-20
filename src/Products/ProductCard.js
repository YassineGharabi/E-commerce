export default function ProductCard(props){
    return(
        <div className="product-card" >
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
            <button className='product-card-foot-btn'>Ajouter au panier</button> 
        </div>
    </div>
    );
}