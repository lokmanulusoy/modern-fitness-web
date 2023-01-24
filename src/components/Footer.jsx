import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container footer__container">
          <article>
            <Link to="/" className="logo">
              <img src={Logo} alt="footer lg" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex
              suscipit illum deserunt id repudiandae natus odit necessitatibus
              molestiae pariatur.
            </p>
            <div className="footer__socials">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </article>
          <article>
            <h4>Kalıcı Bağlantılar</h4>
            <Link to="/about">Hakkında</Link>
            <Link to="/plans">Planlar</Link>
            <Link to="/trainers">Eğitmenler</Link>
            <Link to="/galley">Galeri</Link>
            <Link to="/contact">İletişim</Link>
          </article>
          <article>
            <h4>Kalıcı Bağlantılar</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Durum Çalışmaları</Link>
            <Link to="/s">Etkinlikler</Link>
            <Link to="/s">Topluluk</Link>
            <Link to="/s">SSS</Link>
          </article>
          <article>
            <h4>Yardım</h4>
            <Link to="/contact">İletişim</Link>
            <Link to="/s">Destek</Link>
          </article>
        </div>
        <div className="footer__copyright">
          <small>Lokman ULUSOY</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
