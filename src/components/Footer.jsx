import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>Copyright &copy; 2024. {t("footer_text")}</p>
    </footer>
  );
};

export default Footer;
