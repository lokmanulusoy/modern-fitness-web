import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Bağlantı Kur" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        nostrum hic soluta ab ducimus ad quae, laborum excepturi vitae aperiam!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:lokmanulusoy@yahoo.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/lokman"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+905300626670"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
