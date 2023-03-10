import React from "react";
import styles from "./styles.module.scss";
import img1 from "../../assets/img/about1.png";
import img2 from "../../assets/img/about2.png";
import img3 from "../../assets/img/about3.png";

const About = () => {
  return (
    <div className={styles["container"]}>
      <img src={img1} alt="imagem de um homem e uma mulher" />
      <div id="sobre" className={styles["container__box1"]}>
        <div className={styles["container__box-line"]}>
          <span className={styles["container__line"]}></span>
          <p>VIAGENS NACIONAIS</p>
        </div>
        <h2>O clima perfeito, no lugar perfeito</h2>
        <p>
          Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
          juntos não tem preço.
        </p>
        <button>AGENDAR</button>
      </div>

      <div className={styles["container__box2"]}>
        <div className={styles["container__box-line2"]}>
          <span className={styles["container__line2"]}></span>
          <p>VIAGENS NACIONAIS</p>
        </div>
        <h2>O clima perfeito, no lugar perfeito</h2>
        <p>
          Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
          juntos não tem preço.
        </p>
        <button>AGENDAR</button>
      </div>
      <img src={img2} alt="roda de amigos dançando" />

      <div className={styles["container__box1"]}>
        <div className={styles["container__box-line"]}>
          <span className={styles["container__line"]}></span>
          <p>VIAGENS NACIONAIS</p>
        </div>
        <h2>O clima perfeito, no lugar perfeito</h2>
        <p>
          Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
          juntos não tem preço.
        </p>
        <button>AGENDAR</button>
      </div>
      <img src={img3} alt="roda de amigos na água" />

      <div className={styles["container__box-img1"]}>
        <div className={styles["style-btn"]}>
          <button>RIO DE JANEIRO</button>
        </div>
      </div>
      <div className={styles["container__box-img2"]}>
        <div className={styles["style-btn"]}>
          <button>RIO DAS OSTRAS</button>
        </div>
      </div>
      <div className={styles["container__box-img3"]}>
        <div className={styles["style-btn"]}>
          <button>CALDAS NOVAS</button>
        </div>
      </div>
      <div className={styles["container__box-img4"]}>
        <div className={styles["style-btn"]}>
          <button>AMAZÔNIA</button>
        </div>
      </div>
    </div>
  );
};

export default About;
