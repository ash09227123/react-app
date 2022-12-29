/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-27 16:27:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-28 17:48:43
 * @FilePath: \react-app\cypress\e2e\2-advanced-examples\onSearchInput.cy.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
/// <reference types="cypress" />

describe("search fn", () => {
  it("on keywords searching test", () => {
    // 访问网址
    cy.visit("http://localhost:3000");
    //输入查询关键词
    cy.get(".search").focus().type("crime");
    // 点击查询按钮
    cy.get(".submit").click();
    // url跳转
    cy.url().should("include", "crime");
    cy.get(".catalog > :nth-child(1)").click();
  });
});
