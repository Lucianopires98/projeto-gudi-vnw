import React from "react";
import Menu from "../Menu";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <Menu />
      <div className={styles["container"]}>
        <div className={styles["container__box-img"]}>
          <div className={styles["container__box-search"]}>
            <p className={styles["container__paragraph"]}>
              Para qual estado você deseja ir?
            </p>
            <input
              className={styles["container__input"]}
              placeholder="Pesquisar"
            />
            <button className={styles["container__button"]}>Buscar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
