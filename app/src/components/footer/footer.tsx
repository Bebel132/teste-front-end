import './index.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-text">
                    <a href="#">
                        <img src="/src/assets/Logo.svg" alt="Logo Econverse" />
                    </a>
                    <h2>Lorem ih2sum dolor sit amet, consectetur adih2iscing elit.</h2>
                    <div className="icons">
                        <img src="/src/assets/footer/facebook.svg" alt="" />
                        <img src="/src/assets/footer/instagram.svg" alt="" />
                        <img src="/src/assets/footer/linkedin.svg" alt="" />
                    </div>
                </div>
                <div className="linha"></div>
                <div className="footer-links">
                    <div className="institucional">
                        <h2>Institucional</h2>
                        <ul>
                            <li><a href="">Sobre nós</a></li>
                            <li><a href="">Movimento</a></li>
                            <li><a href="">Trabalhe conosco</a></li>
                        </ul>
                    </div>
                    <div className="ajuda">
                        <h2>Ajuda</h2>
                        <ul>
                            <li><a href="">Suporte</a></li>
                            <li><a href="">Fale Conosco</a></li>
                            <li><a href="">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                    <div className="termos">
                        <h2>Termos</h2>
                        <ul>
                            <li><a href="">Termos e Condições</a></li>
                            <li><a href="">Política de Privacidade</a></li>
                            <li><a href="">Troca e Devolução</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
        </>
    )
};

export default Footer;