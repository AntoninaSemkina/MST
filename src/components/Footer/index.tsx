import React from "react";
import Logo from "../Logo/";
import style from "./style.module.css";
import SocialMedia from "../SocialMedia";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import telegram from "../../assets/telegram.svg";
import tiktok from "../../assets/tiktok.svg";
import whatsapp from "../../assets/whatsapp.svg";
import youtube from "../../assets/youtube.svg";
import Button from "../Button";
import { useNavigate } from "react-router";
import { CONTACT_PAGE_ROUTE } from "../../utils/consts";

const socialIMG = [instagram, linkedin, telegram, tiktok, whatsapp, youtube];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.socialMedia}>
            {socialIMG.map((socialIMG, index) => (
              <SocialMedia key={index} img={socialIMG} />
            ))}
          </div>
          <div className={style.btn}>
            <Button
              text="Contact the team"
              width="150px"
              onClick={() => navigate(CONTACT_PAGE_ROUTE)}
              backgroundColor="#fff"
              textColor="var(--dark-text-color)"
              border="1px solid var(--button-grey-color)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
