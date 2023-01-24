import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100GünAntrenman</h4>
          <h1>Fitness dünyasının efsanelerine katılın</h1>
          <p>
            Programlar, sizi doğru yolda tutmak için etkileşimli bir takvimde
            günlük rehberlik sunar.
          </p>
          <Link to="/plans" className="btn lg">
            Başlayalım !
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
