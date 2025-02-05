import { FC } from "react";
import style from "./style.module.css";
import points from "../../assets/points.svg";

interface AdvInfoProps {
  text: string;
}

const AdvInfo: FC<AdvInfoProps> = ({ text }) => {
  return (
    <div className={style.card}>
      <div className={style.block1}>
        <img src={points} alt="flower" />
      </div>
      <div className={style.block2}>{text}</div>
    </div>
  );
};

export default AdvInfo;
