import React from "react";
import style from "./style.module.css";
import AdvInfo from "../AdvantageInfo";
import Button from "../Button";
import prop from "../../assets/prop.svg";

const advantages = [
  "investments from 10 million rubles",
  "profit per month from 400 thousand rubles",
  "profitability 21%",
];

const MainInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.leftBlock}>
        <h1>OPEN YOUR SURF COFFEE</h1>
        <h2>Terms of the partner program</h2>
        {advantages.map((advantage, index) => (
          <AdvInfo key={index} text={advantage} />
        ))}
        <Button
          text="See more details"
          width="200px"
          backgroundColor="transparent"
          textColor="var(--dark-text-color)"
          border="1px solid var(--button-grey-color)"
        />
      </div>
      <div className={style.rightBlock}>
        <img src={prop} alt="propmachine" />
      </div>
    </div>
  );
};

export default MainInfo;
