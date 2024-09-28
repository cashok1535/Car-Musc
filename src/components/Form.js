import React from "react";
import Telegram from "../img/Telegram.svg";
import Youtube from "../img/Youtube.svg";
import Where from "../img/Where.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import Button from "./Button";

function Form() {
  return (
    <div className="form__block">
      <div className="form--title">ВІДПОВІМО НА БУДЬ-ЯКЕ ПИТАННЯ</div>
      <div className="figures">
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
      </div>
      <form className="form">
        <div className="form__inputs">
          <input className="input" placeholder="ІМ'Я" />
          <input className="input" placeholder="ТЕЛЕФОН" />
        </div>
        <div className="form__med">
          <input
            className="bigInput"
            placeholder="ПИТАННЯ З ДИЗАЙНУ, ТЮНИНГУ ТА ІН."
          />
          <div className="social">
            <a href="https://desktop.telegram.org" className="social__element">
              <img src={Telegram} alt="" />
            </a>
            <a href="https://www.youtube.com" className="social__element">
              <img src={Youtube} alt="" />
            </a>
            <a href="https://desktop.telegram.org" className="social__element">
              <img src={Telegram} alt="" />
            </a>
          </div>
        </div>
        <div className="form__bottom">
          <Button
            type="form--button toRight"
            text="ВІДПРАВИТИ"
          />
          <div className="form__bottom__infoAll">
            <div className="form__bottom__infoWhere">
              <img src={Where} alt="" />
              EU FAUCIBIUS ET RUTRUM FRINGILLA ORCI NUNC
            </div>
            <div className="form__bottom__info">
              <div className="form__bottom__contacts">
                <div className="contacts__phone">
                  <img src={phone} alt="" /> + 123 (456) 78 90
                </div>
                <div className="contacts__email">
                  <img src={mail} alt="" />
                  TEST@TEST.UA
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
