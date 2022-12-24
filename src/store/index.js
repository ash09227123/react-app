/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 14:31:52
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-22 21:41:15
 * @FilePath: \react-app\src\store\index.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import  rootReducer  from "./reducer/conbineReducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
