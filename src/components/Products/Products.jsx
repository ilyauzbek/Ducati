import React from "react";
import s from "./Products.module.scss";

const Products = ({image='/Moto1.png', price='$ 98.990,00', oldPrice='105.090,00'}) => {
  return (
    <>
      <section className={s.product}>
        <div className={s.wrap}>
          <img className={s.image} src={image} alt="" />

          <div className={s.box}>
            <h2>Projetado em torno do V4 Granturismo</h2>
            <p>
              A V4 Granturismo é o centro das atenções na nossa muscle bike e
              permite-lhe expressar ao máximo a sua personalidade. O motor de
              quatro cilindros da Ducati garante alto desempenho, aliado
              à suavidade e regularidade, a cada rotação. O novo chassi combina
              idealmente com os pontos fortes da Diavel, como a sua posição de
              condução característica e o conforto em viagens de médio curso.
              Além disso, graças a uma grande redução de peso, o manuseio e a
              agilidade melhoram visivelmente.
            </p>
            <b>$ {price}</b>
            <s>$ {price}</s>

            <div className={s.btns}>
            <button></button>
            <button></button>
          </div>

          </div>

          
        </div>
      </section>
    </>
  );
};

export default Products;
