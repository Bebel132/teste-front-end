import './index.scss'

const Header = () => {
    return (
        <header>
            <ul aria-label="Benefícios da loja">
                <li>
                    <img src="/src/assets/header/ShieldCheck.svg" alt="" />
                    <span>Compra <strong>100% segura</strong></span>
                </li>
                <li>
                    <img src="/src/assets/header/Truck.svg" alt="" />
                    <span><strong>Frete grátis</strong> acima de R$ 200</span>
                </li>
                <li>
                    <img src="/src/assets/header/CreditCard.svg" alt="" />
                    <span><strong>Parcele</strong> suas compras</span>
                </li>
            </ul>
            <div className="header-content">
                <a href="/" aria-label="Página inicial"><img src="/src/assets/header/Logo.svg" alt="Logo Econverse" /></a>
                <div>
                    <form role="search">
                        <input id="search" type="search" aria-label="Buscar produtos" placeholder="O que você está buscando?" />
                    </form>
                    <img src="/src/assets/header/MagnifyingGlass.svg" id="search-icon" alt="" />
                </div>
                <nav aria-label="Menu do usuário">
                    <a href=""><img src="/src/assets/header/Box.svg" alt="Pedidos" /></a>
                    <a href=""><img src="/src/assets/header/Heart.svg" alt="Favoritos" /></a>
                    <a href=""><img src="/src/assets/header/UserCircle.svg" alt="Conta" /></a>
                    <a href=""><img src="/src/assets/header/ShoppingCart.svg" alt="Carrinho de compras" /></a>
                </nav>
            </div>
            <nav aria-label="Categorias principais" id="categories">
                <a href="#">todas categorias</a>
                <a href="#">supermercado</a>
                <a href="#">livros</a>
                <a href="#">moda</a>
                <a href="#">lançamentos</a>
                <a href="#" className="active" >ofertas do dia</a>
                <a href="#"><img src="/src/assets/header/CrownSimple.svg" alt="" /> assinatura</a>
            </nav>
        </header>
    )
};

export default Header;