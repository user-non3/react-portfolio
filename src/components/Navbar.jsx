import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [language, setLanguage] = useState("Русский");
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    let currentLanguage = language == "Русский" ? "Английский" : "Русский";
    setLanguage(currentLanguage);
    i18n.changeLanguage(currentLanguage);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="navbar__text">underground.</h1>
        <ul className="navbar__list">
          <li>
            <a href="#about" className="navbar__list-item">
              {t("navbar__item-one")}
            </a>
          </li>
          <li>
            <a href="#skills" className="navbar__list-item">
              {t("navbar__item-two")}
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar__list-item">
              {t("navbar__item-three")}
            </a>
          </li>
          <li>
            <a href="#contacts" className="navbar__list-item">
              {t("navbar__item-four")}
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="navbar__button"
          onClick={() => changeLanguage()}
        >
          {language == "Русский" ? "Английский" : "Русский"}
        </button>
        <div className="mobile__nav-btn">
          <AiOutlineMenu size={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
