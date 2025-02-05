import React from "react";
import style from "./style.module.css";
import surfTEAM from "../../assets/surfTEAM.jpg";
import AdvInfo from "../AdvantageInfo";
import Button from "../Button";

import { useNavigate } from "react-router-dom";
import { PARTNER_PAGE_ROUTE } from "../../utils/consts";

const advantages = [
  "There is no lump sum payment. Our main goal is to minimize the cost of starting an enterprise and make it as efficient as possible.",
  "The concession agreement is concluded for 5 years and is automatically extended for the same period.",
  "7.8% of Royalties based on monthly revenue.",
];

const ThirdBlock: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.block2}>
          <h2>Terms of the partner program</h2>
          {advantages.map((advantage, index) => (
            <AdvInfo key={index} text={advantage} />
          ))}
          <Button
            text="See more details"
            width="100%"
            backgroundColor="transparent"
            textColor="var(--dark-text-color)"
            border="1px solid var(--button-grey-color)"
            onClick={() => navigate(PARTNER_PAGE_ROUTE)}
          />
        </div>
        <div className={style.block3}>
          <img src={surfTEAM} alt="teammates" />
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
