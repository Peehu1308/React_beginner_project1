const Hero=()=>{
    return <main className="hero">
        <div className='content'>
        <div className="hero-text">
            <h1>Welcome to Nike</h1>
            <p>Your feet deserve the best and we are here to help you with our shoes.</p>
            <p>JUST DO IT.</p>
            </div>
            
            <div className='hero-button'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <img className="logo" src="/images/prof.png" alt="shopping-cart"/>
                <img className="logo" src="/images/logo.png" alt="shopping-cart"/>
            </div>
        </div>
        
            <div className='hero-image'>
                <img className='imageshoe' src="/images/shoe_red.jpg" alt="shoes"/>
            </div>
    </main>
};
export default Hero;