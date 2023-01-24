import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Sayfa Bulunamadı</h2>
        <Link to="/" className="btn">
          Ana Sayfa
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
