import "./Community.css";
import { FiUser, FiStar, FiInstagram } from "react-icons/fi";
function Community() {
  return (
    <section className="community" id="comunidade">
      <div className="container">
        <div className="community-container">
          <h2>
            <hr />
            Faça parte da comunidade <span>CafezinCoin</span>
          </h2>
          <div className="community-stats">
            <div className="stat">
              <FiUser size={48} />
              <div className="stat-text">
                <h3>50.000</h3>
                <p>usuários</p>
              </div>
            </div>
            <div className="stat">
              <FiStar size={48} />
              <div className="stat-text">
                <h3>32.000</h3>
                <p>membros da comunidade</p>
              </div>
            </div>
            <div className="stat">
              <FiInstagram size={48} />
              <div className="stat-text">
                <h3>80.000</h3>
                <p>seguidores do Instagram</p>
              </div>
            </div>
          </div>
          <button className="community-btn">Ir para a comunidade</button>
        </div>
      </div>
    </section>
  );
}
export default Community;
