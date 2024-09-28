import React, {useRef} from "react";
import sldFirst from "../img/sliderFirst.png";
import sldSecond from "../img/sliderSecond.png";
import sldThird from "../img/sliderThird.png";
import sliderButton from "../img/sliderButton.svg";
import Button from "./Button";

function Slider() {
  const sliderRef = useRef(null)
  function rollSliderTo() {
    sliderRef.current.style.transform = "translate(-" + 670 + "px)";
  }
  function rollSliderBack() {
    sliderRef.current.style.transform = "translate(+" + 670 + "px)";
  }

  return (
    <div className="sliderParent">
      <button className="sliderButton_left" onClick={rollSliderBack}>
        <img src={sliderButton} alt="" />
      </button>
      <div className="slider">
        <div className="slider-line" ref={sliderRef}>
          <div className="slider-line__element">
            <img src={sldFirst} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
          <div className="slider-line__element">
            <img src={sldSecond} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
          <div className="slider-line__element">
            <img src={sldThird} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
          <div className="slider-line__element">
            <img src={sldThird} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
          <div className="slider-line__element">
            <img src={sldThird} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
          <div className="slider-line__element">
            <img src={sldThird} alt="" />
            <Button
              type="toBottom slider-line__element--text"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vulputate laoreet sapien a sit ante."
            />
          </div>
        </div>
      </div>
      <button className="sliderButton_right" onClick={rollSliderTo}>
        <img src={sliderButton} alt="" />
      </button>
    </div>
  );
}

export default Slider;
