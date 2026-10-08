import './index.scss'

const Newsletter = () => {
    return (
        <section className="newsletter-container">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <form action="" className="newsletter-form">
                    <fieldset className="text-inputs">
                        <input type="text" required placeholder="Digite seu nome"/>
                        <input type="email" required placeholder="Digite seu email" />
                        <input type="submit" value="Inscrever" />
                    </fieldset>
                    <div className="checkbox">
                        <input type="checkbox" required id="consent" />
                        <label htmlFor="consent">Aceito os termos e condições</label>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Newsletter;