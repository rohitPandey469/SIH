import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />} />
      {/* Need to check if the user is logged in before going to the Home page */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
