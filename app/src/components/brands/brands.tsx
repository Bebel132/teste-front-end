import './index.scss'

const Brands = () => {
    return (
        <div className="brands-container">
            <h1>Navegue por marcas</h1>
            <div className="brands">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="brand">
                        <img src="/src/assets/Logo.svg" alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Brands;