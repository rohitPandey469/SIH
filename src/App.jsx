import React from "react";
import AllRoutes from "./AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
