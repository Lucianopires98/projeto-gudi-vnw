import React from "react";
import logo from "../../assets/img/logo.svg";
import styles from "./styles.module.scss";

const Menu = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles["container__box-button"]}>
        <button>Sobre</button>
        <button>Beneficios</button>
        <button>Contato</button>
        <button>AGENDAR</button>
      </div>
    </div>
  );
};

export default Menu;
