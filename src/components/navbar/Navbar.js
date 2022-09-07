import React, { useContext } from "react";
import { Toolbar, Stack, Box } from "@mui/material";
import ProfileContext from "../../context/ProfileContext";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledLogo,
  StyledNavLinks,
  StyledSwitch,
} from "../../styles/styles";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <Box>
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            gap: 3,
          }}
        >
          <StyledLogo>Manzar Hassan</StyledLogo>
          <StyledSwitch checked={darkMode} onChange={handleChange} />
        </Stack>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <StyledNavLinks onClick={() => navigate("/")}>Home</StyledNavLinks>
          <StyledNavLinks onClick={() => navigate("/skills")}>
            Skills
          </StyledNavLinks>
          <StyledNavLinks onClick={() => navigate("/projects")}>
            Projects
          </StyledNavLinks>
          <StyledNavLinks onClick={() => navigate("/about")}>
            About
          </StyledNavLinks>
          <StyledButton
            variant="contained"
            sx={{ width: "6rem", height: "2rem", marginLeft: "2rem" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </StyledButton>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
