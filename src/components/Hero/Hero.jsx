import "./Hero.css";
import moeda from "../../assets/animacao.png";
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1>CafezinCoin</h1>
            <h2>
              A moeda digital que <br />
              cresce com você.
            </h2>
            <p>Simples, acessível e pensada para suas transações.</p>
            <div className="hero-actions">
              <button className="btn-primary">Entrar na lista de espera</button>
              <button className="btn-secondary">Conhecer o projeto</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={moeda} alt="Moeda CafezinCoin" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
