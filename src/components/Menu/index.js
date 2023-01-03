import React from "react";
import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.png";
import styles from "./styles.module.scss";

const Menu = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles["container__menu-mobile"]}>
        <img src={menu} alt="menu hamburger" />
      </div>
      <div className={styles["container__menu"]}>
        <button>Sobre</button>
        <button>Beneficios</button>
        <button>Contato</button>
        <button>AGENDAR</button>
      </div>
    </div>
  );
};

export default Menu;
