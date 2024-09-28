import React from "react";

function HeaderInfo() {
  return (
    <div className="headerInfo">
      <div className="headerInfo__element left">
        <div className="headerInfo__element--title">АДРЕСА:</div>
        <div className="headerInfo__element--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <div className="headerInfo__element">
        <div className="headerInfo__element--title">ТЕЛЕФОН:</div>
        <div className="headerInfo__element--text">+ 123 (456) 78 90</div>
        <div className="headerInfo__element--text">+ 098 (765) 43 21</div>
      </div>
      <div className="headerInfo__element right">
        <div className="headerInfo__element--title">РЕЖИМ РОБОТИ:</div>
        <div className="headerInfo__element--text">пн-пт : 10:00 - 20:00</div>
        <div className="headerInfo__element--text">сб-нд : 12:00 - 20:00</div>
      </div>
    </div>
  );
}

export default HeaderInfo;
