import './Slider.css';
import adidas from '../assets/adidas.png';
import samsung from '../assets/samsung.png';
import reebok from '../assets/reebok.png';
import nike from '../assets/nike.png';
import lenovo from '../assets/lenovo.png';
import jordan from '../assets/jordan.png';
import xiaomi from '../assets/xiaomi.png';
export default function Slider() {
    const images = [adidas, samsung, reebok, nike, lenovo, xiaomi, jordan ];
    return (
        <main className='cont'>
            <div className="slider">
            {images.map((el, index) => {
                return (
                    <div className="slide-card" key={index}>
                        <img src={el} alt={`${el}`+'alt'} />
                    </div>
                );
            })}
            {images.map((el, index) => {
                return (
                    <div className="slide-card" key={index}>
                        <img src={el} alt={`${el}`+'alt'} />
                    </div>
                );
            })}
        </div>
        </main>
    )
}