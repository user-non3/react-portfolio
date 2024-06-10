import React from "react";
import heroImg from "../assets/hero.png";
import "boxicons";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="container">
        <div className="main">
          <div className="main__right">
            <div className="main__right-texts">
              <h1 className="main__right-title">
                {t("navbar_title")} <span>{t("title_name")}</span>
                <br /> {t("title_one")}
                <br /> {t("title_two")}
              </h1>

              <p className="main__right-about">
                {t("about_text-one")}
                <br /> {t("about_text-two")}
              </p>
            </div>
            <ul className="main__right-buttons">
              <li>
                <a
                  href="https://vk.com/user.none"
                  className="main__right-buttons-item"
                  target="_blank"
                >
                  <box-icon type="logo" name="vk"></box-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/a__akbaraliev"
                  className="main__right-buttons-item"
                  target="_blank"
                >
                  <box-icon type="logo" name="instagram"></box-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className="main__left">
            <img src={heroImg} className="main__left-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
