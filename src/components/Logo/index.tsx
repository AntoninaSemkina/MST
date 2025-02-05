import React from "react";
import style from "./style.module.css";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={style.link}>
      <div>
        <img className={style.logo} src={logo} alt="logoSurf" />
      </div>
    </Link>
  );
};

export default Logo;
