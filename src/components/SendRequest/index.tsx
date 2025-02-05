import { FC } from "react";
import style from "./style.module.css";
import RequestBlock from "../RequestBlock";
import prop from "../../assets/prop.svg";

const SendRequest: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.block1}>
          <img src={prop} alt="prop" />
        </div>
        <div className={style.block2}>
          <RequestBlock
            title="Submit a request to open a Surf Coffee company"
            text="Fill out the form and our manager will contact you."
            backgroundColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default SendRequest;
