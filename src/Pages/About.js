import React, { useEffect } from "react";
import {
  AboutAttribution,
  AboutButton,
  AboutLink,
  AboutQuote,
  AboutText,
  HomepageBackground,
  HomepageOverlay,
} from "./style";
import  bg  from "../Assets/Images/hose-sunset.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <HomepageBackground src={bg} />
      <HomepageOverlay />
        <AboutQuote>
          "When you have a creative gift, it’s like someone just gave you a
          horse. Now, you have to learn how to ride it."
        </AboutQuote>
        <AboutAttribution>- JERRY SEINFELD</AboutAttribution>
        <AboutText>
          {
            "Originally proposed by Jerry Seinfeld, the Stallion Theory was systemitized by creator Campbell Walker in his video "
          }
          <AboutLink
            href={"https://www.youtube.com/watch?v=z8f5MRDiSGY&t=611s"}
          >
            The Stallion Theory: How aimless creativity ruins your life
          </AboutLink>
          {
            '. Creativity is a powerful asset, but without the reigns to control it, you might find yourself running in circles like an out of control stallion. Enter the Stallion Harness, a system for managing your projects; your motivation, methods, and rewards for completing them.'
          }
        </AboutText>
        <AboutButton onClick={() => navigate("/projects")}>GET STARTED</AboutButton>
    </div>
  );
};

export default About;
