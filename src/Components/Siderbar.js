import React from "react";
import {
  SidebarClose,
  SidebarContainer,
  SidebarHamburger,
  SidebarLink,
} from "./style";
import { useEffect, useState } from "react";
import hambuger from "../Assets/Icons/burger-menu-svgrepo-com.svg";
import close from "../Assets/Icons/close-bold-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

const Siderbar = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }, []);

  return (
    <div>
      {!open && (
        <SidebarHamburger src={hambuger} onClick={() => setOpen(true)} />
      )}
        <SidebarContainer width={open ? '25%' : '0%'}>
          <SidebarClose src={close} onClick={() => setOpen(false)} />
          <div style={{marginTop: '56px'}}>
          <SidebarLink onClick={() => {setOpen(false); navigate("/")}}>Home</SidebarLink>
          {projects &&
            projects.map((project) => (
              <SidebarLink onClick={() => { setOpen(false); navigate("/harness", { state: {id: project.id}})}}>{project.name}</SidebarLink>
      ) )}
        </div>
        </SidebarContainer>
    </div>
  );
};

export default Siderbar;
