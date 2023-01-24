import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./Plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Üyelik Planları" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        enim consequatur id dolorem.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price} TL`}</h1>
                <h2>/aylık</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Paket Seç</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
