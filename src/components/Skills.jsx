import React from "react";
import iconGit from "../assets/icons/icon-git.svg";
import iconNest from "../assets/icons/icon-nest.svg";
import iconSass from "../assets/icons/icon-sass.svg";
import iconSocket from "../assets/icons/icon-socket.svg";
import iconExpress from "../assets/icons/icon-express.svg";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__title">
          {t("skills_title-one")} <span>{t("skills_title-two")}</span>
        </div>
        <ul className="skills__list">
          <li className="skills__list-item">
            <img src={iconGit} alt="" />
            <h3>GIT</h3>
          </li>
          <li className="skills__list-item">
            <img src={iconNest} alt="" />
            <h3>NEST</h3>
          </li>
          <li className="skills__list-item">
            <img src={iconSass} alt="" />
            <h3>SASS</h3>
          </li>
          <li className="skills__list-item">
            <img src={iconSocket} alt="" />
            <h3>SOCKET</h3>
          </li>
          <li className="skills__list-item">
            <img src={iconExpress} alt="" />
            <h3>EXPRESS</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
