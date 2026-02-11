import "./About.css";
import {
  FiTrendingUp,
  FiCreditCard,
  FiZap,
  FiLock,
  FiShield,
} from "react-icons/fi";
function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-container">
          <div className="about-text">
            <h2>O que é a CafezinCoin?</h2>
            <p>
              A Cafezin Coin é uma moeda digital criada para facilitar
              pagamentos simples, rápidos e acessíveis, conectando pessoas,
              pequenos negócios e o consumo do dia a dia.
            </p>
            <div className="about-tags">
              <span>
                <FiShield size={24} />
                Segurança
              </span>
              <span>
                <FiZap size={24} />
                Rapidez
              </span>
            </div>
          </div>
          <div className="about-cards">
            <div className="card">
              <FiTrendingUp size={48} />
              <p>Transações Rápidas</p>
            </div>
            <div className="card">
              <FiCreditCard size={48} />
              <p>Gerenciamento sem burocracia</p>
            </div>
            <div className="card">
              <FiZap size={48} />
              <p>Rápida Aprovação</p>
            </div>
            <div className="card">
              <FiLock size={48} />
              <p>Armazenamento Seguro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
