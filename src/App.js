/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 13:58:28
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-17 16:18:38
 * @FilePath: \react-app\src\App.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import "./App.css";
import Counter from "./components/Counter";
import TopBar from "./components/Topbar";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <SearchBar />
      </header>
      <section>
        <Catalog />
        <Counter />
      </section>
    </div>
  );
}

export default App;
