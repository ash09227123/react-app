/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-27 16:27:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-29 11:43:08
 * @FilePath: \react-app\cypress\e2e\movieTest\onMoiveClick.cy.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
/// <reference types="cypress" />

import "cypress-real-events/support";

describe("movie operation", () => {
  it("on movie card click", () => {
    // 访问网址
    cy.visit("http://localhost:3000");
    let movie_1 = cy.get(":nth-child(1) > .movie_img_wrap > :nth-child(1)");
    let oper_1 = cy.get(".movie_img_wrap .oper_spot");
    movie_1.realHover();
    oper_1.first().click({ force: true });
    cy.get(".oper_list > :nth-child(2)").click();
    cy.get(".modal_operate_clz").click();
    movie_1.realHover();
    oper_1.first().click({ force: true });
    cy.get(".oper_list > :nth-child(3)").click();
    cy.get(".modal_card_content").within(() => {
      cy.get(".sc-hLBbgP").should("have.text", "DELETE MOVIE");
      cy.get(".submit").click();
    });
  });
});
