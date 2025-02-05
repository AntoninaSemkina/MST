import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInfo from "../../components/MainInformation";
import SecondBlock from "../../components/SecondBlock";
import ThirdBlock from "../../components/ThirdBlock";
import SendRequest from "../../components/SendRequest";

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <MainInfo />
      <SecondBlock />
      <ThirdBlock />
      <SendRequest />
      <Footer />
    </div>
  );
};

export default MainPage;
