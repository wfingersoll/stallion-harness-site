import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavButton, NavContainer } from './style'

const Navbar = () => {
  const navigate = useNavigate();  

  return (
    <NavContainer>
        <NavButton onClick={() => navigate("/")}>
          Home
        </NavButton>
        <NavButton onClick={() => navigate("/about")}>
          About
        </NavButton>
        <NavButton onClick={() => navigate("/projects")}>
          Projects
        </NavButton>
    </NavContainer>
  )
}

export default Navbar