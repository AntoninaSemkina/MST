import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PARTNER_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../../utils/consts";
import style from "./style.module.css";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.container}>
      <button
        className={style.btn}
        onClick={() => navigate(PARTNER_PAGE_ROUTE)}
      >
        Partner Program
      </button>
      <button className={style.btn} onClick={() => navigate(TEAM_PAGE_ROUTE)}>
        Our team
      </button>
      <button
        className={style.btn}
        onClick={() => navigate(CONTACT_PAGE_ROUTE)}
      >
        Contacts
      </button>
    </nav>
  );
};

export default Navigation;
