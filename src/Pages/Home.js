import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomepageAboutContainer,
  HomepageAboutSubTitle,
  HomepageAboutText,
  HomepageAboutTitle,
  HomepageBackground,
  HomepageLine,
  HomepageLink,
  HomepageNewButton,
  HomepageNewButtonContainer,
  HomepageOverlay,
  HomepageSubtitle,
  HomepageTitle,
  HomepageButtonSubtitle
} from "./style";

import bg from "../Assets/Images/horse3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

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
      <HomepageOverlay>
        <HomepageTitle>THE STALLION HARNESS</HomepageTitle>
        <HomepageSubtitle>Harness your Creativity</HomepageSubtitle>
        <HomepageNewButtonContainer>
          <HomepageNewButton onClick={() => createNewProject()}>+ New Project</HomepageNewButton>
          <HomepageButtonSubtitle onClick={() => navigate("/projects")}>Or View Current Projects</HomepageButtonSubtitle>
        </HomepageNewButtonContainer>
      </HomepageOverlay>
    </div>
  );
};

export default Home;
