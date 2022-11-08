import React from "react";

import { Row, Col } from "../Ranks";
import styled from "styled-components";
import "./index.less";

const MyModal = function (props) {
  const { title, width, onClose = () => {}, footer } = props; 
  const ModalMask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  `;
  const ModalCard = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    width: ${width || 900}px;
    height: auto;
    background-color: #232323;
    box-sizing: border-box;
    padding: 30px 50px 50px;
    transform: translateX(-50%) translateY(-50%);
  `;
  return (
    <>
      <ModalMask>
        <ModalCard>
          <div className="modal_top_oprate_bar">
            <div className="modal_operate_clz" onClick={onClose}>
              X
            </div>
          </div>
          <p className="modal_card_title">{title}</p>
          <div className="modal_card_content">{props.children}</div>
          <div className="modal_card_footer">
            <Row gutter="24">
              <Col span={7}></Col>
              <Col span={7} style={{ textAlign: "right" }}>
                {footer ? (
                  footer
                ) : (
                  <>
                    <button className="reset">RESET</button>
                    <button className="submit">SUBMIT</button>
                  </>
                )}
              </Col>
            </Row>
          </div>
        </ModalCard>
      </ModalMask>
    </>
  );
};

export default MyModal;
