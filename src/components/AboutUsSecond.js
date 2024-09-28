import React, { useEffect, useState, useRef } from "react";
import AboutFirst from "../img/AboutFirst.svg";
import AboutSecond from "../img/AboutSecond.svg";
import AboutThird from "../img/AboutThird.svg";
import sliderButton from "../img/sliderButton.svg";
import sliderImg from "../img/About.png";
import sliderImgS from "../img/About2.png";

function AboutUsSecond() {
  const sliderRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleNext = () => {
    setCount((prevCount) => {
      if (prevCount >= 4) {
        return 4;
      } else {
        return prevCount + 1;
      }
    });
  };
  const handlePrev = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };
  useEffect(() => {
    sliderRef.current.style.transform = "translate(-" + count * 686 + "px)";
  }, [count]);

  return (
    <div className="aboutUsSecond">
      <div className="aboutUsSecond__left">
        <div className="aboutSlider">
          <div className="sliderSecond__line" ref={sliderRef}>
            <img className="sliderElement" src={sliderImgS} alt="" />
            <img className="sliderElement" src={sliderImg} alt="" />
            <img className="sliderElement" src={sliderImgS} alt="" />
            <img className="sliderElement" src={sliderImg} alt="" />
            <img className="sliderElement" src={sliderImgS} alt="" />
            <img className="sliderElement" src={sliderImg} alt="" />
          </div>
          <div className="aboutUs__sliderNavigation">
            <button className="aboutUsSecond__left--button" onChangeCapture={handlePrev}>
              <img src={sliderButton} alt="" />
            </button>
            <div className="aboutUs__right--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque auctor nibh feugiat est. Consectetur lectus.
            </div>
            <button className="aboutUsSecond__right--button" onClick={handleNext}>
              <img src={sliderButton} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="aboutUsSecond__right">
        <div className="aboutUs__right__element">
          <div className="AboutUs__info--title">
            <img src={AboutFirst} alt="" />
            МАТЕРІАЛИ ВІД НАЙКРАЩИХ КОМПАНІЙ
          </div>
          <div className="AboutUs__info--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            rutrum est, molestie proin tristique duis sed. Morbi suspendisse
            amet nisl vestibulum risus. Quis pretium
          </div>
        </div>
        <div className="figures">
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
        </div>
        <div className="aboutUs__right__element">
          <div className="AboutUs__info--title">
            <img src={AboutSecond} alt="" />
            ДОСВІДЧЕНІ МАЙСТРИ
          </div>
          <div className="AboutUs__info--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec
            elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra
            amet adipiscing orci, lectus aenean ultricies. Erat viverra eget
            blandit ornare. Molestie ipsum commodo faucibus rhoncus
          </div>
        </div>
        <div className="figures">
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
          <div className="next__headerTitle--element"></div>
        </div>
        <div className="aboutUs__right__element">
          <div className="AboutUs__info--title">
            <img src={AboutThird} alt="" />
            ГАРАНТІЯ НА ВСІ ВИДИ РОБОТИ
          </div>
          <div className="AboutUs__info--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            volutpat.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSecond;
