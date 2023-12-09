import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HarnessPageWrapper,
  HarnessProjectName,
  HarnessPageInnerWrapper,
  HarnessProjectNameContainer,
  HarnessProjectNameLabel,
  HomepageTitle,
  HarnessContextTitle,
  ContextRow,
  ContextContainer,
  ContextTitle,
  ContextTextField,
  ContextFooter,
  InstructionContainer,
  InstructionTextField,
  ConstraintContainer,
  ConstraintTextField,
  RewardsRow,
  RewardsContainer,
  RewardsTitle,
  RewardsTextField,
  HarnessPageBackground,
  SaveButton,
  HarnessTitle,
} from "./style";

import bg from "../Assets/Images/brown-bg.jpg"

const Harness = () => {
  const [projectInfo, setProjectInfo] = useState();
  const location = useLocation();

  useEffect(() => {
    fetchProject();
  }, []);

  const projectId = location.state.id ? location.state.id : "1";

  const fetchProject = () => {
    const project = JSON.parse(localStorage.getItem("projects")).find(
      (elem) => elem.id === projectId
    );
    setProjectInfo(project ? project : null);
  };

  const handleSave = () => {
    const currentProjects = JSON.parse(localStorage.getItem("projects")).map((elem, ind) => {
      if(elem.id === projectId){
        return projectInfo;
      } else {
        return elem;
      }
    });
    localStorage.setItem("projects", JSON.stringify(currentProjects));
    window.location.reload();
  }

  return (
    <div>
    <HarnessPageBackground src={bg}/>
    <HarnessPageWrapper>
      {projectInfo && (
        <HarnessPageInnerWrapper>
          <HarnessProjectNameContainer>
            <HarnessProjectNameLabel>PROJECT: </HarnessProjectNameLabel>
            <HarnessProjectName
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, name: e.target.value })
              }
              value={projectInfo.name}
            />
          </HarnessProjectNameContainer>
          <HarnessTitle>STALLION HARNESS</HarnessTitle>
          <HarnessContextTitle>CONTEXT</HarnessContextTitle>
          <ContextRow>
            <ContextContainer>
              <ContextTitle>DESTINATION</ContextTitle>
              <ContextTextField
                onChange={(e) =>
                  setProjectInfo({
                    ...projectInfo,
                    destination: e.target.value,
                  })
                }
                value={projectInfo.destination}
              ></ContextTextField>
              <ContextFooter>YOUR MISSION</ContextFooter>
            </ContextContainer>
            <ContextContainer>
              <ContextTitle>VEHICLE</ContextTitle>
              <ContextTextField
                onChange={(e) =>
                  setProjectInfo({ ...projectInfo, vehicle: e.target.value })
                }
                value={projectInfo.vehicle}
              ></ContextTextField>
              <ContextFooter>YOUR MEDIUM</ContextFooter>
            </ContextContainer>
          </ContextRow>
          <ContextRow>
            <ContextContainer>
              <ContextTitle>FUEL</ContextTitle>
              <ContextTextField
                onChange={(e) =>
                  setProjectInfo({ ...projectInfo, fuel: e.target.value })
                }
                value={projectInfo.fuel}
              ></ContextTextField>
              <ContextFooter>YOUR FLOW STATE FUEL</ContextFooter>
            </ContextContainer>
            <ContextContainer>
              <ContextTitle>KEYS</ContextTitle>
              <ContextTextField
                onChange={(e) =>
                  setProjectInfo({ ...projectInfo, keys: e.target.value })
                }
                value={projectInfo.keys}
              ></ContextTextField>
              <ContextFooter>WHATEVER LEADS TO ACTION</ContextFooter>
            </ContextContainer>
          </ContextRow>
          <InstructionContainer>
            <ContextTitle>INSTRUCTION</ContextTitle>
            <InstructionTextField
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, instruction: e.target.value })
              }
              value={projectInfo.instruction}
            ></InstructionTextField>
            <ContextFooter>
              DEFINE THE TASK IN THE SIMPLEST WORDS, WITH A CLEAR ACTION AND
              OUTCOME
            </ContextFooter>
          </InstructionContainer>
          <HarnessContextTitle>CONSTRAINTS</HarnessContextTitle>
          <ContextRow>
            <ConstraintContainer>
              <ContextTitle>RESOURCES</ContextTitle>
              <ConstraintTextField
                onChange={(e) =>
                  setProjectInfo({
                    ...projectInfo,
                    resources: e.target.value,
                  })
                }
                value={projectInfo.resources}
              ></ConstraintTextField>
            </ConstraintContainer>
            <ConstraintContainer>
              <ContextTitle>MISC</ContextTitle>
              <ConstraintTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, misc: e.target.value })
              }
              value={projectInfo.misc}></ConstraintTextField>
              </ConstraintContainer>
              <ConstraintContainer>
              <ContextTitle>TIME</ContextTitle>
              <ConstraintTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, time: e.target.value })
              }
              value={projectInfo.time}></ConstraintTextField>
              </ConstraintContainer>
          </ContextRow>
          <ContextRow>
            <ConstraintContainer>
              <ContextTitle>QUALITY</ContextTitle>
              <ConstraintTextField
                onChange={(e) =>
                  setProjectInfo({
                    ...projectInfo,
                    quality: e.target.value,
                  })
                }
                value={projectInfo.quality}
              ></ConstraintTextField>
            </ConstraintContainer>
            <ConstraintContainer>
              <ContextTitle>QUANTITY</ContextTitle>
              <ConstraintTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, quantity: e.target.value })
              }
              value={projectInfo.quantity}></ConstraintTextField>
              </ConstraintContainer>
              <ConstraintContainer>
              <ContextTitle>DEADLINE</ContextTitle>
              <ConstraintTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, deadline: e.target.value })
              }
              value={projectInfo.deadline}></ConstraintTextField>
              </ConstraintContainer>
          </ContextRow>
          <RewardsRow>
            <RewardsContainer>
              <RewardsTitle>I'LL REWARD MYSELF WITH</RewardsTitle>
              <RewardsTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, reward: e.target.value })
              }
              value={projectInfo.reward} ></RewardsTextField>
            </RewardsContainer>
            <RewardsContainer>
              <RewardsTitle>DESIRED OUTCOME</RewardsTitle>
              <RewardsTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, desiredOutcome: e.target.value })
              }
              value={projectInfo.desiredOutcome} ></RewardsTextField>
            </RewardsContainer>
            <RewardsContainer>
              <RewardsTitle>ACTUAL OUTCOME</RewardsTitle>
              <RewardsTextField onChange={(e) =>
                setProjectInfo({ ...projectInfo, actualOutcome: e.target.value })
              }
              value={projectInfo.actualOutcome} ></RewardsTextField>
            </RewardsContainer>
          </RewardsRow>
          <SaveButton onClick={() => handleSave()}>SAVE</SaveButton>
        </HarnessPageInnerWrapper>
      )}
    </HarnessPageWrapper>
    </div>
  );
};

export default Harness;
