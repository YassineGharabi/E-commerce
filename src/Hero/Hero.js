import './Hero.css';
export default function Hero(){
    return(
        <main className="hero">
            <div className="hero-info">
                <h2 className="hero-title">Welcome to your store</h2>
            </div>
            <div className="hero-btn">
                <button className="hbtn primary">Start Shoping</button>
                <button className="hbtn second">Black Friday</button>
            </div>
        </main>
    );
}