import Header from "../../components/Header";
import "./About.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
const About = () => {
  return (
    <>
      <Header title="Hakkında" image={HeaderImage}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea
          beatae! Omnis sit id laboriosam reiciendis odit, porro necessitatibus
          sint!
        </p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Storyıma" />
          </div>
          <div className="about__section-content">
            <h1>Bizim Hikayemiz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fugit aliquam architecto nemo omnis inventore quod perferendis a
              dolor debitis nobis porro alias, accusantium sit quis blanditiis.
              Magni, quae eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              laborum nesciunt fuga expedita labore accusamus odio nostrum
              perspiciatis quod corrupti culpa vitae, repudiandae ut voluptate
              consequatur mollitia possimus corporis velit quam aliquid
              reiciendis eveniet deserunt? Esse velit vitae, consectetur
              possimus dolor dignissimos illo libero doloremque ratione, autem,
              nemo soluta dolorum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non
              quaerat quo eos, consectetur ducimus architecto sit nihil
              assumenda similique, reiciendis molestiae recusandae fuga
              excepturi voluptates error odit eligendi animi neque aliquid?
              Numquam eveniet consequuntur, doloribus possimus laboriosam maxime
              ducimus necessitatibus sequi ex facilis at adipisci quasi
              molestiae voluptate vitae! Nemo quis similique odio aliquid.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Bizim Vizyonumuz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fugit aliquam architecto nemo omnis inventore quod perferendis a
              dolor debitis nobis porro alias, accusantium sit quis blanditiis.
              Magni, quae eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              laborum nesciunt fuga expedita labore accusamus odio nostrum
              perspiciatis quod corrupti culpa vitae, repudiandae ut voluptate
              consequatur mollitia possimus corporis velit quam aliquid
              reiciendis eveniet deserunt? Esse velit vitae, consectetur
              possimus dolor dignissimos illo libero doloremque ratione, autem,
              nemo soluta dolorum!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Visionıma" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Missionıma" />
          </div>
          <div className="about__section-content">
            <h1>Bizim Misyonumuz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              fugit aliquam architecto nemo omnis inventore quod perferendis a
              dolor debitis nobis porro alias, accusantium sit quis blanditiis.
              Magni, quae eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              laborum nesciunt fuga expedita labore accusamus odio nostrum
              perspiciatis quod corrupti culpa vitae, repudiandae ut voluptate
              consequatur mollitia possimus corporis velit quam aliquid
              reiciendis eveniet deserunt? Esse velit vitae, consectetur
              possimus dolor dignissimos illo libero doloremque ratione, autem,
              nemo soluta dolorum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non
              quaerat quo eos, consectetur ducimus architecto sit nihil
              assumenda similique, reiciendis molestiae recusandae fuga
              excepturi voluptates error odit eligendi animi neque aliquid?
              Numquam eveniet consequuntur, doloribus possimus laboriosam maxime
              ducimus necessitatibus sequi ex facilis at adipisci quasi
              molestiae voluptate vitae! Nemo quis similique odio aliquid.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
