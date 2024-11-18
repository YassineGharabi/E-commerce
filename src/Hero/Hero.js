import './Hero.css';
export default function Hero(){
    return(
        <main className="hero">
            <div className="hero-info">
                <h2 className="hero-title">Bienvenue dans votre magasin</h2>
                <h2 className='hero-subtitle'>SOLDES - JUSQU'À 50% DE RÉDUCTION</h2>
            </div>
            <div className="hero-btn">
                <button className="hbtn primary">Achetez maintenant</button>
                <button className="hbtn second">Black Friday</button>
            </div>
        </main>
    );
}