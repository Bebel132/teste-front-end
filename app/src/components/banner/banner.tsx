import './index.scss'

const Banner = () => {
    return (
        <section className="banner" aria-labelledby="banner-title">
            <div className="banner-content">
                <h1 id="banner-title">Venha conhecer nossas promoções</h1>
                <p><strong>50% off</strong> nos produtos</p>
                <button type="button">Ver produto</button>
            </div>
        </section>
    )
};

export default Banner;