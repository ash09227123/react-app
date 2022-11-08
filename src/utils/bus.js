/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-08 16:57:01
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 17:01:26
 * @FilePath: \react-app\src\utils\bus.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import { EventEmitter } from "events";
var bus = new EventEmitter();

export default bus;
