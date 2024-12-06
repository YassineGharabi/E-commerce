import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProductCard from '../../Products/ProductCard';
import useProductData from '../../Products/DataProduct';
import './AllProduct.css';
import { useEffect, useState } from 'react';
export default function AllProducts(){

    const data = useProductData();
    const [inputValue,setInputValue] = useState('');
    const [filtredData, setfiltredData] = useState([]);
    // const [filtredDataBysearch, setfiltredDataBysearch] = useState([]);

    const categories = [
        {id:'1',name:'men\'s clothing'},
        {id:'2',name:'jewelery'},
        {id:'3',name:'electronics'},
        {id:'4',name:'women\'s clothing'}
    ];

    // filtre par categorie
    // const handleCategoryClick = (element) => {
    //     setfiltredData(data.filter((el) => el.category === element));
    //     setfiltredDataBysearch([]);
    // }

    //    // filtre par recherche
    //    useEffect(() => {
    //     let lowerCaseInputValue = inputValue.toLowerCase();
    //     setfiltredDataBysearch(data.filter((el) => el.title.toLowerCase().includes(lowerCaseInputValue) || el.description.toLowerCase().includes(lowerCaseInputValue)  ));
    // }, [inputValue]);

    useEffect(() => {
        filterProducts(inputValue);
    }, [inputValue,data]);


    // filtre avec types

    const filterProducts = ( bySearch = '' , byCategorie = null ) => {

        let filtred = data || [];

        if(byCategorie){
            filtred = filtred.filter((el) => el.category === byCategorie);
        }

        if(bySearch){
            let lowerCaseInputValue = bySearch.toLowerCase();
            filtred = filtred.filter(
                (el) => el.title.toLowerCase().includes(lowerCaseInputValue) ||
                 el.description.toLowerCase().includes(lowerCaseInputValue))
        }

        setfiltredData(filtred);
    }


    // affichage des boutons
    const displayCategoryButtons  = categories.map((el)=>{
        return <button className='allproduct-search-btn' key={el.id} onClick={()=>filterProducts('',el.name)}>{el.name}</button> 
   });



    // affichage des produits
    const displayProducts = () => ( ( filtredData || [] ).map((el)=>(
            <ProductCard key={el.id} image={el.image} title={el.title} price={el.price} id={el.id} produit={el} />
        ))
    );

    

    return(
        <>
            <Navbar getSearch={(value)=>{setInputValue(value)}} />
            <main className="allproduct">
                <div className='allproduct-head'>
                    <h2 className="allproduct-title">TOUS LES PRODUITS</h2>
                    <h5 >RECHERCHER AVEC CATEGORIES</h5>
                    <div className="allproduct-search">
                        {displayCategoryButtons}            
                    </div>
                </div>
                <div className="allproduct-container">{displayProducts()}
                </div>
            </main>
            <Footer/>
        </>
    )
}