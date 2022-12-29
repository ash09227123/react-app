/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-29 11:04:40
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-29 11:18:33
 * @FilePath: \react-app\cypress\e2e\movieTest\onAddMovie.cy.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
/// <reference types="cypress" />

describe("add new movie", () => {
  it("on click add movie button", () => {
    // 访问网址
    cy.visit("http://localhost:3000");
    //点击添加
    cy.get('.addM').click();
    // 点击查询按钮
    cy.get(".modal_card_title").should("have.text", "ADD MOVIE");
  });
});
