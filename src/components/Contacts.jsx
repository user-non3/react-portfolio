import React from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__block">
          <div className="contacts__left">
            <input
              type="text"
              className="contacts__input"
              placeholder={t("email_one")}
            />
            <input
              type="email"
              className="contacts__input"
              placeholder={t("email_two")}
            />
            <input
              type="text"
              className="contacts__input"
              placeholder={t("email_three")}
            />
            <input
              type="text"
              className="contacts__input"
              placeholder={t("email_four")}
            />
            <button className="contacts__button">{t("email_button")}</button>
          </div>
          <div className="contacts__right">
            <h2 className="contacts__right-title">
              Let's <span>talk</span> for
              <br />
              Something special
            </h2>
            <p className="contacts__right-about">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <p className="contacts__right-email">escobarro700@gmail.com</p>
            <p className="contacts__right-number">+998 (91) 001-01-01</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
