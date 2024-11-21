import { FaTruck } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineCardGiftcard } from "react-icons/md";
import './Nosservice.css';
export default function Nosservice() {

    const data = [
        {id:'1',name:'Livraison Gratuite',icon:<FaTruck className="nosservice-card-icon"  />,text:'À partir de 250 DH d\'achat'},
        {id:'2',name:'Retours',icon:<Ri24HoursLine className="nosservice-card-icon"  />,text:'Prolongés à 24 heures'},
        {id:'3',name:'Paiement Sécurisé',icon:<FaCircleDollarToSlot  className="nosservice-card-icon"  />,text:'En ligne / À la livraison'},
        {id:'4',name:'Carte Fidélité',icon:<MdOutlineCardGiftcard  className="nosservice-card-icon"  />,text:'Demandez votre carte en magasin'},
    ];


    return(<div className="nosservice">
        <div className="nosservice-container">
            <div className='nosservice-head'>
                <h2 className="nosservice-title">NOS SERVICES</h2>
            </div>
            <div className="nosservice-cards">
            {data.map((el)=>{
                return(
                    <div className="nosservice-card">
                    {el.icon}
                    <h3 className="nosservice-card-title">{el.name}</h3>
                    <p className="nosservice-card-text">{el.text}</p>
                </div>
                );
            })}
            </div>
        </div>
    </div>);
}