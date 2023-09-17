import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Mainbar from "../../components/Mainbar/Mainbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mainbar />
      <Footer />
    </div>
  );
};

export default Home;
