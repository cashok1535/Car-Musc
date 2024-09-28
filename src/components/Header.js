import React, { useState } from "react";
import HeaderInfo from "./HeaderInfo";
import Button from "./Button";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="headerNavbar">
        <div className="headerNavbar__elements">
          <a href="?" className="navbar__element">
            Головна
          </a>
          <a href="?" className="navbar__element">
            Обклеювання автомобілів
          </a>
          <a href="?" className="navbar__element">
            Детейлінг автомобілів
          </a>
          <a href="?" className="navbar__element">
            Галерея робіт
          </a>
        </div>
        <div onClick={handleClick} className="header__search">
          <div className="search__element"></div>
          <div
            className={`search__element ${active ? "active" : "inActive"}`}
          ></div>
          <div className="search__element"></div>
        </div>
      </div>
      <div className="headerTitle">CAR MUSC</div>
      <div className="next__headerTitle">
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
        <div className="next__headerTitle--element"></div>
      </div>
      <div className="headerText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna
        amet penatibus.
      </div>
      <div className="headerAction">
        <Button text="НАШІ ПОСЛУГИ" />
      </div>
      <HeaderInfo />
    </header>
  );
}

export default Header;
