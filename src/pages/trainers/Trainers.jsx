/* eslint-disable array-callback-return */
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import React from "./Trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Eğitmenlerimiz" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi impedit
        officia labore sequi consequatur numquam necessitatibus, rerum vitae?
        Perspiciatis, dignissimos.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
