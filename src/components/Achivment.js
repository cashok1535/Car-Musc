import React from "react";
import img from '../img/tableImg.svg'

function Achivment() {
  return (
    <div className="achivment">
      <div className="achivmentInfo">
        <div className="achivmentInfo__title">
          НАШІ ДОСЯГНЕННЯ ВІД КУБКА УКРАЇНИ ДО ЧЕМПІОНАТІВ СВІТУ
        </div>
        <div className="achivmentInfo__img">
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
        </div>
        <div className="achivmentInfo__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
          tincidunt aliquam tincidunt pretium sodales. Tristique odio
          pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut
          amet odio orci magnis praesent ultrices. Praesent malesuada lacus
          tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis
          pretium, volutpat.{" "}
        </div>
      </div>
      <div className="achivmentTable">
        <div className="achivmentTableFirst">
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>1</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>6</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>2</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>1</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
        </div>
        <div className="achivmentTableSecond">
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>4</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>3</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><span>#</span>1</div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
          <div className="tableFirst__element">
            <div className="tableFirst__element__title"><img  src={img} alt="" /></div>
            <div className="tableFirst__element__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Achivment;
