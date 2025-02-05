import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TeamPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Footer />
    </div>
  );
};

export default TeamPage;
