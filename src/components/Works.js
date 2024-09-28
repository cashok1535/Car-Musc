import React from "react";
import gridImgFirst from "../img/gridImgFirst.png";
import gridImgSecond from "../img/gridImgSecond.png";
import gridImgThird from "../img/gridImgThird.png";
import gridImgFourth from "../img/gridImgFourth.png";
import gridImgFiveth from "../img/gridImgFiveth.png";
import gridImgSixth from "../img/gridImgSixth.png";

function Works() {
  return (
    <div className="works">
      <div className="works--title">НАШІ РОБОТИ </div>
      <div className="figures">
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
      </div>
      <div className="works__grid--images">
        <img src={gridImgFirst} alt="" />
        <img src={gridImgSecond} alt="" />
        <img src={gridImgThird} alt="" />
        <img src={gridImgFourth} alt="" />
        <img src={gridImgFiveth} alt="" />
        <img src={gridImgSixth} alt="" />
        <img src={gridImgSixth} alt="" />
        <img src={gridImgFiveth} alt="" />
        <img src={gridImgFourth} alt="" />
        <img src={gridImgThird} alt="" />
        <img src={gridImgSecond} alt="" />
        <img src={gridImgFirst} alt="" />
        <img src={gridImgFirst} alt="" />
        <img src={gridImgSecond} alt="" />
        <img src={gridImgThird} alt="" />
        <img src={gridImgFourth} alt="" />
        <img src={gridImgFiveth} alt="" />
        <img src={gridImgSixth} alt="" />
      </div>
    </div>
  );
}

export default Works;
