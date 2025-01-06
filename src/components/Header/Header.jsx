import React, { useState } from "react";
import s from "./Header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };
  const onInputFocus = (e) => {
    e.stopPropagation();
    setIsActive(true);
  };

  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <a href="" className={s.logo}>
            Ducati
          </a>

          <div className={s.menu}>
            <a href="">HOME</a>
            <a href="">CATALOGUE</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
          </div>

          <div
            className={`${s.search} ${isActive ? s.active : null}`}
            onClick={toggleSearch}
          >
            <img src="/search.svg" alt="" />
            <input onClick={onInputFocus} placeholder="Search..." type="text" />
          </div>
        </nav>

        <div className={s.wrap}>
          <div className={s.card}>
            <button className={s.next}></button>

            <div className={s.box}>
              <h1 className={s.title}>
                DUCATI
                <img src="/Ducati (1).png" alt="" />
              </h1>

              <button>Read More</button>
            </div>

            <div className={s.inner}>
              <div>
                <p>215 CV</p>
              </div>
              <div>
                <p>300 km/h</p>
              </div>
              <div>
                <p>NPX 25/30</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
