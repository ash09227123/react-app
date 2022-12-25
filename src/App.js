/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 13:58:28
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-25 18:39:11
 * @FilePath: \react-app\src\App.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import "./App.css";
import Home from "./Containers/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={"/search"} />} />
          <Route path="/search" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
