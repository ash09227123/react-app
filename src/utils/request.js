/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-06-14 14:21:18
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-28 15:58:05
 * @FilePath: \react-app\src\utils\request.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import axios from 'axios'; 

const instance = axios.create({
    baseURL:'/',
    timeout:5000,
    withCredentials: true, //主要是添加这一行  
})

//添加请求拦截器
instance.interceptors.request.use(function(config){
    let token = localStorage.getItem("x-auth-token");
    if(token){
        config.headers={
            "Authorization":token
        }
    }
    return config
},function(error){
    //请求错误处理
    return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function(response){ 
    return response.data.data
},function(error){
    return Promise.reject(error)
})

export default instance;