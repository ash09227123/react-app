/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 14:31:52
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-28 15:27:39
 * @FilePath: \react-app\src\store\index.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducer/movieReducer";

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
