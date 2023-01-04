import React from "react";
import styles from "./styles.module.scss";

import ImgGallery1 from "../../assets/img/gallery1.png";
import ImgGallery2 from "../../assets/img/gallery2.png";
import ImgGallery3 from "../../assets/img/gallery3.png";
import ImgGallery4 from "../../assets/img/gallery4.png";
import ImgGallery5 from "../../assets/img/gallery5.png";
import ImgGallery6 from "../../assets/img/gallery6.png";

import ImgCard1 from "../../assets/img/paradas.svg";
import ImgCard2 from "../../assets/img/caminho.svg";
import ImgCard3 from "../../assets/img/coco.svg";
import ImgCard4 from "../../assets/img/cardapio.svg";

const Gallery = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__box-text"]}>
        <p>use a hashtag #brasilisverigudi</p>
        <h2>Nosso mural de Experiências</h2>
      </div>

      <div className={styles["container__box-gallery"]}>
        <img src={ImgGallery1} alt="homem e criança" />
        <img src={ImgGallery2} alt="grupo de pessoas pulando" />
        <img src={ImgGallery3} alt="homem e cachorro" />
        <img src={ImgGallery4} alt="homem fazendo selfie" />
        <img src={ImgGallery5} alt="mulher ciclista" />
        <img src={ImgGallery6} alt="grupo de mulheres" />
      </div>

      <div className={styles["container__box-cards"]}>
        <div className={styles["container__card-gray"]}>
          <img src={ImgCard1} alt="O melhor do Brasil" />
          <p>O melhor do Brasil</p>
        </div>

        <div className={styles["container__card-blue"]}>
          <img src={ImgCard2} alt="Cidades mais frequentadas" />
          <p>Cidades mais frequentadas</p>
        </div>

        <div className={styles["container__card-gray"]}>
          <img src={ImgCard3} alt="Pontos turísticos" />
          <p>Pontos turísticos</p>
        </div>

        <div className={styles["container__card-blue"]}>
          <img src={ImgCard4} alt="Restaurantes" />
          <p>Restaurantes</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
