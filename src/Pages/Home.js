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
} from "./style";

import bg from "../Assets/Images/horse2.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
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
        <HomepageSubtitle>Harnes your Creativity</HomepageSubtitle>
        <HomepageNewButtonContainer>
          <HomepageNewButton>Create new Project</HomepageNewButton>
        </HomepageNewButtonContainer>
      </HomepageOverlay>
      <HomepageAboutContainer>
        <HomepageAboutTitle>
          When you have a creative gift, it’s like someone just gave you a
          horse. Now, you have to learn how to ride it.
        </HomepageAboutTitle>
        <HomepageAboutSubTitle>JERRY SEINFELD</HomepageAboutSubTitle>
        <HomepageLine />
        <HomepageAboutText>
          {
            "Originally proposed by Jerry Seinfeld, the Stallion Theory was systemitized by creator Bruce Campbell in his video "
          }
          <HomepageLink
            href={"https://www.youtube.com/watch?v=z8f5MRDiSGY&t=611s"}
          >
            The Stallion Theory: How aimless creativity ruins your life
          </HomepageLink>
          {
            ". Creativity is a powerful asset, but without the reigns to control it, you might find yourself running in circles like an out of control stallion. Enter the Stallion Harness, a system for managing your projects; your motivation, methods, and rewards for completing them. Click \"Create New Project\" to get started, or use the sidebar at the top of the page to navigate to existing projects!"
          }
        </HomepageAboutText>
      </HomepageAboutContainer>
    </div>
  );
};

export default Home;
