import React from "react";
import { Toolbar, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledLogo,
  StyledNavLinks,
} from "../../styles/styles";

const Navbar = () => {
  const navigate = useNavigate();

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
