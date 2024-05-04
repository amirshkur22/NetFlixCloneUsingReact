/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Components/Header/Header";
import Banner from '../../Components/Banner/Banner'
import Fotter from "../../Components/Fotter/Fotter";
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Fotter />
    </>
  );
};

export default Home;
