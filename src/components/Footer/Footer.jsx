import "./Footer.css";
import logo from "../../assets/logo-cafezincoin.png";
import { FiInstagram, FiFacebook, FiSend, FiYoutube } from "react-icons/fi";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-item">
            <FiInstagram size={32} />
            <span>@cafezincoin</span>
          </div>
          <div className="footer-item">
            <FiFacebook size={32} />
            <span>CafezinCoin</span>
          </div>
          <div className="footer-item">
            <FiSend size={32} />
            <span>Link do Telegram</span>
          </div>
          <div className="footer-item">
            <FiYoutube size={32} />
            <span>@CafezinCoin</span>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-brand">
          <img src={logo} alt="CafezinCoin" />
          <p>Copyright © CafezinCoin 2026 | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
