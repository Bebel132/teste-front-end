import './index.scss'

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h1>Inscreva-se na nossa newsletter</h1>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <form action="" className="newsletter-form">
                    <div className="text-inputs">
                        <input type="text" placeholder="Digite seu nome"/>
                        <input type="email" placeholder="Digite seu email" />
                        <input type="submit" value="Inscrever" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="consent" />
                        <label htmlFor="consent">Aceito os termos e condições</label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Newsletter;