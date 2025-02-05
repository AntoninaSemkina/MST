import React from "react";
import style from "./style.module.css";
import surfATM1 from "../../assets/surfATM1.jpg";
import AdvInfo from "../AdvantageInfo";
import Button from "../Button";
import { useNavigate } from "react-router";
import { PARTNER_PAGE_ROUTE } from "../../utils/consts";

const advantages = [
  "Consultation at the stage of room selection and individual calculation of the opening cost and operating cycle indicators;",
  "Support of the opening process by an Instructor, assistance in optimizing the timing and cost of opening;",
  "Launching an enterprise with an Opening team, professional baristas and managers, assistance in creating a team and optimizing activities throughout the project lifecycle.",
];

const SecondBlock: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.block1}>
          <img src={surfATM1} alt="atmosphere" />
        </div>
        <div className={style.block2}>
          <h2>Support at every stage</h2>
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
      </div>
    </div>
  );
};

export default SecondBlock;
