/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-06-23 13:51:22
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-22 21:43:30
 * @FilePath: \react-app\src\store\reducer\conbineReducers.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import { combineReducers } from "redux";
import base from "./baseReducer";
import movie from "./movieReducer";

const rootReducer = combineReducers({
    base,movie
});

export default rootReducer;
