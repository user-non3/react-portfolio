import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation();

  const getProjects = async () => {
    let { data } = await axios.get(
      "https://api.github.com/users/user-non3/repos"
    );
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1 className="projects__title">
          {t("projects_title-one")} <span>{t("projects_title-two")}</span>
        </h1>
        <div className="projects__list">
          {projects ? (
            projects.map((item) => (
              <a
                key={item.id}
                className="projects__list-item"
                href={item.html_url}
                target="_blank"
              >
                <h2>{item.name}</h2>
              </a>
            ))
          ) : (
            <h2 className="projects__loading">Loading...</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
