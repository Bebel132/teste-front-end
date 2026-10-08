import './index.scss'

const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-text">
                    <img src="/src/assets/Logo.svg" alt="Logo Econverse" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="icons">
                        <img src="/src/assets/footer/facebook.svg" alt="" />
                        <img src="/src/assets/footer/instagram.svg" alt="" />
                        <img src="/src/assets/footer/linkedin.svg" alt="" />
                    </div>
                </div>
                <div className="linha"></div>
                <div className="footer-links">
                    <div className="institucional">
                        <p>Institucional</p>
                        <a href="">Sobre nós</a>
                        <a href="">Movimento</a>
                        <a href="">Trabalhe conosco</a>
                    </div>
                    <div className="ajuda">
                        <p>Ajuda</p>
                        <a href="">Suporte</a>
                        <a href="">Fale Conosco</a>
                        <a href="">Perguntas Frequentes</a>
                    </div>
                    <div className="termos">
                        <p>Termos</p>
                        <a href="">Termos e Condições</a>
                        <a href="">Política de Privacidade</a>
                        <a href="">Troca e Devolução</a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </>
    )
};

export default footer;