import React from "react";
import styles from "./styles.module.scss";

const Form = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__box-form"]}>
        <h2>Fale conosco</h2>
        <input type="text" placeholder="Diga o seu melhor email" />
        <input type="text" placeholder="Assunto" />
        <textarea placeholder="Escreva a sua mensagem"></textarea>
        <button>ENVIAR</button>
      </div>
    </div>
  );
};

export default Form;
