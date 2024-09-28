import React from "react";
import AboutFourth from "../img/AboutFourth.svg";
import AboutFirst from "../img/AboutFirst.svg";
import AboutSecond from "../img/AboutSecond.svg";
import AboutThird from "../img/AboutThird.svg";
import Button from "./Button";

function Services() {
  return (
    <div className="services">
      <div className="services--title">НАШІ ПОСЛУГИ</div>
      <div className="figures">
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
      </div>
      <div className="services__buttons">
        <Button type="serviceButton toRight" text="ОБКЛЕЮВАННЯ" />
        <Button type="serviceButton toRight" text="ДЕТЕЙЛІНГ" />
      </div>
      <div className="servicesAbout">
        <div className="servicesAbout__element">
          <img src={AboutFourth} alt="" />
          <div className="servicesAbout--title">ЗАХИСНІ ПЛІВКИ</div>
          <div className="services--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </div>
          <Button type="services--button toRight" text="ДЕТАЛЬНІШЕ" />
        </div>
        <div className="servicesAbout__element">
          <img src={AboutFirst} alt="" />
          <div className="servicesAbout--title">КОЛЬОРОВІ ПЛІВКИ</div>
          <div className="services--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </div>
          <Button type="services--button toRight" text="ДЕТАЛЬНІШЕ" />
        </div>
        <div className="servicesAbout__element">
          <img src={AboutSecond} alt="" />
          <div className="servicesAbout--title">ДИЗАЙН</div>
          <div className="services--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </div>
          <Button type="services--button toRight" text="ДЕТАЛЬНІШЕ" />
        </div>
        <div className="servicesAbout__element">
          <img src={AboutThird} alt="" />
          <div className="servicesAbout--title">ОБКЛЕЮВАННЯ САЛОНУ</div>
          <div className="services--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </div>
          <Button type="services--button toRight" text="ДЕТАЛЬНІШЕ" />
        </div>
      </div>
    </div>
  );
}

export default Services;
