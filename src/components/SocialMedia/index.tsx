import { FC } from "react";
import style from "./style.module.css";

interface SocialProps {
  img: string;
  backgroundColor?: string;
  width?: string;
  onClick?: () => void;
  border?: string;
}

const SocialMedia: FC<SocialProps> = ({
  img,
  backgroundColor,
  width,
  onClick,
  border,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "initial",
    width: width || "auto",
    border: border || "none",
  };
  return (
    <div className={style.card}>
      <button className={style.btn} style={buttonStyle} onClick={onClick}>
        <img src={img} alt="social icon" style={{ width: "20px" }} />
      </button>
    </div>
  );
};

export default SocialMedia;
