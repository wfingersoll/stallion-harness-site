import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../Assets/Images/sunset-pasture.jpg";
import {
  HomepageBackground,
  HomepageOverlay,
  ProjectsListContainer,
  ProjectsListCreateItem,
  ProjectsListItem,
  ProjectsListTitle,
  ProjectsOverlay,
  ProjectsTitleLine,
} from "./style";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
    window.scrollTo(0, 0);
  }, []);

  const createNewProject = () => {
    const latestId = projects ? projects[projects.length - 1].id + 1 : 1;
    const newProject = {
      id: latestId,
      name: "New Project",
      destination: "",
      vehicle: "",
      fuel: "",
      keys: "",
      instruction: "",
      resources: "",
      misc: "",
      time: "",
      quality: "",
      quantity: "",
      deadline: "",
      reward: "",
      desiredOutcome: "",
      actualOutcome: "",
    };
    localStorage.setItem(
      "projects",
      projects
        ? JSON.stringify([...projects, newProject])
        : JSON.stringify([newProject])
    );
    navigate("/harness", { state: { id: newProject.id } });
  };

  return (
    <div>
      <HomepageBackground src={bg} />
      <ProjectsOverlay />
      <ProjectsListTitle>CURRENT PROJECTS</ProjectsListTitle>
      <ProjectsTitleLine />
      <ProjectsListContainer>
        {projects &&
          projects.map((project) => (
            <ProjectsListItem
              onClick={() => {
                navigate("/harness", { state: { id: project.id } });
                window.location.reload();
              }}
            >
              {project.name}
            </ProjectsListItem>
          ))}
          <ProjectsListCreateItem
              onClick={() => {
                createNewProject();
              }}
            >
              + Create New Project
            </ProjectsListCreateItem>
      </ProjectsListContainer>
    </div>
  );
};

export default Projects;
