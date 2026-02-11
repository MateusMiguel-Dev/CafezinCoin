import "./HowItWorks.css";
import { FiFileText } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
function HowItWorks() {
  return (
    <section className="how">
      <div className="how-container">
        <h2 className="how-title">Como funciona?</h2>
        <div className="how-card">
          <div className="how-item">
            <FiFileText size={40} />
            <h3>Crie sua carteira</h3>
            <p>
              Crie sua carteira digital em poucos minutos e tenha controle total
              sobre seus Cafezin Coins com segurança.
            </p>
          </div>
          <div className="how-item">
            <FiSend size={40} />
            <h3>Receba e envie</h3>
            <p>
              Envie e receba Cafezin Coin de forma rápida, prática e sem
              complicação, a qualquer hora.
            </p>
          </div>
          <div className="how-item">
            <FiDollarSign size={40} />
            <h3>Use no dia a dia</h3>
            <p>
              Utilize a Cafezin Coin em pagamentos, transferências e no consumo
              do cotidiano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
