import './index.scss'

const Brands = () => {
    return (
        <section className="brands-container">
            <h2>Navegue por marcas</h2>
            <div className="brands">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="brand">
                        <img src="/src/assets/Logo.svg" alt="" />
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Brands;