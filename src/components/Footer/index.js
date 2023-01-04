import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <div id="contato" className={styles["container"]}>
      <div>
        <img src={logo} alt="logo" />
        <p>Sobre nós</p>
        <p>Mural de memórias</p>
        <p>Eventos Gudi</p>
        <p>Nosso blog</p>
      </div>

      <div>
        <h2>Contato</h2>
        <p>Chat Virtual</p>
        <p>SAC Online</p>
        <p>Ouvidoria</p>
        <p>FAQ</p>
      </div>

      <div>
        <h2>Benefícios</h2>
        <p>Conta digital Gudi</p>
        <p>Viaje com Milhas</p>
        <p>C6 Átomos</p>
        <p>ID Jovem</p>
      </div>

      <div>
        <h2>Lugares</h2>
        <p>O melhor do Brasil</p>
        <p>Cidades frequentes</p>
        <p>Pontos turísticos</p>
        <p>Restaurantes</p>
      </div>

      <div>
        <h2>Curiosidades</h2>
        <p>Cultura e tradições</p>
        <p>Pratos típicos</p>
        <p>Mitos brasileiros</p>
        <p>Carnaval</p>
      </div>
    </div>
  );
};

export default Footer;
